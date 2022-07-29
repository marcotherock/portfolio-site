function getInputValue() {
    let inputVal = document.getElementsByClassName("inputClass")[0].value;
    alert(toCamelCase(inputVal));
    
}

function toCamelCase(str){
    
    let s = str.split("");
    let i;

    s[0] = s[0].toLowerCase();
    
    for (i=0; i<s.length; i++) {
      if ((s[i] == "-") || (s[i] == "_")){
        s.splice(i,1);
        s[i] = s[i].toUpperCase();
      }
    }

    return s.join("");
  }