module.exports = function check(str, bracketsConfig) {
    if ((str.length % 2 !== 0) || (str.length == 0)) return false;
    // функция находит тип скобок по открывающей скобке и возвращает символ закрывающей скобки
    function findTypeClosBracket(openBracket, bracketsConfig) {
        let result = "undef";
        bracketsConfig.forEach(function(element) {
            if (openBracket == element[0]) result = element[1]
        });
        return result;
    };
    //функция которая удаляет подстроку из строки. iStart и iEnd включительно
    function delSubString(str, iStart, iEnd) {
        return newString = str.substring(0, iStart) + str.substring(iEnd + 1);
    }
    let length = str.length;
    for (let i = 0; i < length - 1; i++) {
        if (str[i + 1] == findTypeClosBracket(str[i], bracketsConfig)) {
            str = delSubString(str, i, i + 1);
            // i=-1 потому что после i++ оно стартует с i=1
            i = -1;
            length = length - 2;
        }
    }
    if (str.length == 0) return true;
    else return false;
}