module.exports = function check(str, bracketsConfig) {
  let arrBr = ["(", ")"];
  let countLoop = 0;
  let result = "undef";
  let pos = 0;

  while (result === "undef") {
      arrBr.forEach(function(item, i, arrBr) {
          if ((str[pos] == item) && (i == 0)) countLoop++;
          if ((str[pos] == item) && (i == 1)) {
              if (countLoop > 0) countLoop--;
              else result = "Err";
          }
      })
      pos++;
      if (pos>str.length) result = "finish";
  };
  console.log ("___________________________");
  console.log("str= ", str);
  console.log ("countloop= ",countLoop, "result= ", result);
  if (result == "Err") {console.log ("= ", false); return false}

  if (countLoop == 0) {console.log ("= ", true); return true}
  else {console.log ("= ", false); return false}

}