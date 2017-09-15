module.exports = function check(str, bracketsConfig) {
    "use strick";
 
     console.log("___________________________");
 
    //находим индекс закрывающйй скобки начиная с конца, если таковой не будет возвращаем -1
    function findIndEndSubStr(str, endSymbol) {
        for (let i = str.length; i > 0; i--) {
            if (str[i] == endSymbol) return i;
        }
        return -1;
    }
 
    //разделяем строку на 2 подстроки выводим как массив где [0] 1 строка [1] вторая
    function splitString(str, iEnd) {
        let strArr = ["", ""];
        // ищменяем на i=1 и из 1-го if меняем (i<=iEnd) на (i<iEnd) , чтобы рабочая подстрока не имела уже проверенных скобок
        for (let i = 1; i <= str.length - 1; i++) { 
            if (i < iEnd) strArr[0] = strArr[0] + str[i];
            if (i > iEnd) strArr[1] = strArr[1] + str[i];
        }
        return strArr;
    }

    // функция находит тип скобок по открывающей скобке и возвращает символ закрывающей скобки
    function findTypeClosBracket(openBracket, bracketsConfig) {
        let result="undef";
        bracketsConfig.forEach(function(element, i, bracketsConfig) {
            if (openBracket == element[0]) result= element[1]
        });
        return result;
    };

    function chkSubString(subStr, bracketsConfig) {
        if (subStr.length == 0) return true;  //чтобы когда разделило строку на 1 и нулевой длины нулевая = true при лог перемножении
        console.log ("Input str= ", subStr);
        let closeSymb=findTypeClosBracket(subStr[0],bracketsConfig);
        console.log ("closeSymb= ",closeSymb);
        let endIndex =  findIndEndSubStr(subStr,closeSymb);
        console.log ("endIndex= ",endIndex);
        if (endIndex == -1) return false;
        else
        if (endIndex == 1) return true;
        else{
            console.log("let subStrArr =");
            let subStrArr = splitString(subStr, endIndex);
            if (chkSubString(subStrArr[0],bracketsConfig) && chkSubString(subStrArr[1],bracketsConfig) ==true) return true;
            else return false;
        }  
        console.log ("Error! :ne dolgno do syda doxodit");    
    };

    // str = "(({})[{}])[{}]";
    // console.log ("testing chkSubString= ",  chkSubString(str, bracketsConfig) );
    return (chkSubString(str, bracketsConfig));
 
     console.log("___________________________");
     console.log("                   ");
}