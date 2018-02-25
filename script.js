/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var input = document.getElementById("inputxt");
      var clear = false;
      var previous = "";
      var equation = "";
      var tail = true;
      function press(clicked) {
        switch (clicked) {
                     
            case "CE":
            if (input.value !== "" ) {
               input.value = input.value.slice(0,-1);
            } else {
                input.value = "0";
            } 
            
            case "=":
            if (previous != "" && equation != "") {
              input.value = calc(previous, input.value, equation);
              tail = false;
              equation = "";
            }
            break;
        
            case "+":
            case "-":
            case "*":
            case "/":
            if (equation != "" && !tail) { 
              previous = calc(previous, input.value, equation);
              clear = true;
              equation = clicked;
            } else {
              previous = input.value;
              clear = true;
              equation = clicked;
            }
            tail = true;
            break;
            
            case "AC":
            input.value = "0";
            clear = false;
            previous = "";
            equation = "";
            break;
  
            default:
            input.value = input.value == "0" ? "" : input.value;
            tail = false;
            if (clear) {
              input.value = "";
              input.value += clicked;
              clear = false;
            } else {
              input.value += clicked;
            }
            break;
        }
    }

    function toggle() {
        var style = document.getElementById("style");
        var input = document.getElementById('inputxt');
        if (style.href.match("style.css")) {
            style.href = "disable.css";  
            input.value = "0";
        }
        else {
            style.href = "style.css"; 
            input.value = "0";
        }
    }

    function calc(a, b, operator) {
        var result = "";
        switch (operator) {
            case "+":
                result = Number(a) + Number(b);
                return round(result, 5);
            case "-":
                result = Number(a) - Number(b);
                return round(result, 5);
            case "*":
                result = Number(a) * Number(b);
                return round(result, 5);
            case "/":
                result = Number(a) / Number(b);
                return round(result, 5);
            default:
            break;
        }
   }	

   
    function round(value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
          } 
          
          
    
