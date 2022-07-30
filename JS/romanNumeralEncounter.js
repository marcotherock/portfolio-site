function getInputValue() {
    let inputVal = document.getElementsByClassName("inputClass")[0].value;
    document.getElementById("result").innerHTML= "The result is: " + solution(inputVal);
    
}

function solution (roman) {
 
    let letters = roman.split("");
    let solution = [];

    for (let i=0; i<letters.length; i++) {
        if (letters[i] === "M" && letters[i+1] === "M" && letters[i+2] === "M" && letters[i+3] === "M") {
            return "This is not a valid Roman Number";
        } else if (letters[i] === "D" && letters[i+1] === "D") {
            return "This is not a valid Roman Number"
        }  else if (letters[i] === "C" && letters[i+1] === "C" && letters[i+2] === "C" && letters[i+3] === "C") {
            return "This is not a valid Roman Number";
        }  else if (letters[i] === "L" && letters[i+1] === "L") {
            return "This is not a valid Roman Number";
        }  else if (letters[i] === "X" && letters[i+1] === "X" && letters[i+2] === "X" && letters[i+3] === "X") {
            return "This is not a valid Roman Number";
        } else if (letters[i] === "V" && letters[i+1] === "V") {
            return "This is not a valid Roman Number";
        }  else if (letters[i] === "I" && letters[i+1] === "I" && letters[i+2] === "I" && letters[i+3] === "I") {
            return "This is not a valid Roman Number";
        }  
    }

// Converter

    for (let i=0; i<letters.length; i++){
      if (letters[i] == "M") {
        solution.push(1000)
      } else if (letters[i] == "D") {
        solution.push(500)
      }  else if (letters[i] == "C") {
        solution.push(100)
      }  else if (letters[i] == "L") {
        solution.push(50)
      }  else if (letters[i] == "X") {
        solution.push(10)
      }  else if (letters[i] == "V") {
        solution.push(5)
      }  else if (letters[i] == "I") {
        solution.push(1)
      } 
    }

  //Checks for subtractions and check for illegal subtractions

    for (let l=0; l<solution.length-1; l++) {
      if ((solution[l]<solution[l+1] && solution[l-1]<solution[l+1])){
        return "This is not a valid Roman Number";
      } else if (solution[l]<solution[l+1]) {
        let new_value = solution[l+1]-solution[l]
        solution.splice(l,2,new_value)
      }
    }
    
    // return solution by sum of array elements

    return solution.reduce((a, b) => a + b, 0)
    
  }