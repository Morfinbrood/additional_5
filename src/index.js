module.exports = function check(str, bracketsConfig) {

    str = "(({)[}])[}]";
    bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
    let paireBrackets = ["(",")"];

    function findIndEndSubStr (str,paireBrackets){
        let endSymbol=paireBrackets[1];
        for (let i =str.length; i>0;i--){
            if (str[i]==endSymbol) return i;
        }
        return -1;
    }

    console.log("___________________________");
    console.log ("test findIndEndSubStr i= ",findIndEndSubStr (str,paireBrackets) );
     
    function splitString (str,iEnd){
        let strArr=["",""];
        for (let i=0;i<=str.length-1;i++){
            if (i<=iEnd) strArr[0]=strArr[0]+str[i];
            if (i>iEnd)  strArr[1]=strArr[1]+str[i];
        }
        return strArr;
    }

    console.log ("test splitString strArr= ",splitString (str,7) );
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