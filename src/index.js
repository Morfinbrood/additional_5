module.exports = function check(str, bracketsConfig) {
    let result = "undef";

    while (result === "undef") {
        pos++;
        if (pos > str.length) result = "finish";
    };


    console.log("___________________________");
    console.log("str= ", str);

    if (result == "Err") {
        console.log("= ", false);
        return false
    }

}