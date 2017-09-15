module.exports = function check(str, bracketsConfig) {
    "use strick";

    str = "(({)[}])[}]";
    bracketsConfig = [
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ];

    console.log("___________________________");

    //находим индекс закрывающйй скобки начиная с конца, если таковой не будет возвращаем -1
    function findIndEndSubStr(str, endSymbol) {
        for (let i = str.length; i > 0; i--) {
            if (str[i] == endSymbol) return i;
        }
        return -1;
    }

    // console.log("str source = ", str, " bracketsConfig = ", bracketsConfig);
    // console.log("test findIndEndSubStr i= ", findIndEndSubStr(str, ")"));

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

    //console.log("test splitString strArr= ", splitString(str, 7));


    // функция находит тип скобок по открывающей скобке и возвращает символ закрывающей скобки
    function findTypeClosBracket(openBracket, bracketsConfig) {
        let result="undef";
        bracketsConfig.forEach(function(element, i, bracketsConfig) {
            if (openBracket == element[0]) result= element[1]
        });
        return result;
    };

    //console.log("test findTypeClosBracket openBracket= { ", findTypeClosBracket("{", bracketsConfig));

    //let subStr = str;
    function chkSubString(subStr, bracketsConfig) {
        console.log ("Input data: str= ", subStr," bracketsConfig= ",bracketsConfig);
        let closeSymb=findTypeClosBracket(subStr[0],bracketsConfig);
        console.log ("closeSymb= ",closeSymb);
        let endIndex =  findIndEndSubStr(subStr,closeSymb);
        console.log ("endIndex= ",endIndex);
        let subStrArr = splitString(subStr, endIndex);
        return subStrArr;
    };
    console.log ("testing chkSubString= ",  chkSubString(str, bracketsConfig) );


    console.log("___________________________");
    console.log("                   ");

    // let result = "undef";

    // while (result === "undef") {
    //     pos++;
    //     if (pos > str.length) result = "finish";
    // };


    // console.log("___________________________");
    // console.log("str= ", str);

    // if (result == "Err") {
    //     console.log("= ", false);
    //     return false
    // }

}