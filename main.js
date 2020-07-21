
/*------------------------------------------------------------------- */

function changeStyleToDark(darkStyle,lightStyle){
  var mood = document.getElementById("mood"),
      backspaceIcon = document.getElementById("backspace");
  if(mood.value === "1"){
    document.getElementById("style").setAttribute("href", lightStyle)
    mood.innerHTML = "Dark";
    backspaceIcon.setAttribute("src", "backspace-icon.png");
    mood.value = "0";
  }else{
    document.getElementById("style").setAttribute("href", darkStyle);
    mood.innerHTML = "Light";
    backspaceIcon.setAttribute("src", "backspace-icon2.png");
    mood.value = "1";
  }};
  
/*------------------------------------------------------------------- */

function tofixed(num,dig){
  if(Number.isInteger(num)){
      return num;
  }else{
      return num.toFixed(dig);}};

/*------------------------------------------------------------------- */

function insert(num){
document.getElementById("homeScreen").value += num;};

/*------------------------------------------------------------------- */

function clearScreen(){
  secScreen.value = '',
  homeScreen.value = '';};


function del() {
  var value = homeScreen.value;
  homeScreen.value = value.substr(0, value.length - 1);};

/* ----------------------------------------------------------------- */

    function parseCalculationString(s) {
      var calculation = [],
          current = '';
      for (var i = 0, ch; ch = s.charAt(i); i++) {
          if ('%*/+-'.indexOf(ch) > -1) {
              if (current == '' && ch == '-') {
                  current = '-';
              } else {
                  calculation.push(parseFloat(current), ch);
                  current = '';
              }
          } else {
              current += s.charAt(i);
          }
      }
      if (current != '') {
          calculation.push(parseFloat(current));
      }
      return calculation;
  }
  
  function calculate(calc) {
      var ops = [{'%': (a, b) => a % b},
                 {'*': (a, b) => a * b, '/': (a, b) => a / b},
                 {'+': (a, b) => a + b, '-': (a, b) => a - b}],
          newCalc = [],
          currentOp;
      for (var i = 0; i < ops.length; i++) {
          for (var j = 0; j < calc.length; j++) {
              if (ops[i][calc[j]]) {
                  currentOp = ops[i][calc[j]];
              } else if (currentOp) {
                  newCalc[newCalc.length - 1] = 
                      currentOp(newCalc[newCalc.length - 1], calc[j]);
                  currentOp = null;
              } else {
                  newCalc.push(calc[j]);
              }
              console.log(newCalc);
          }
          calc = newCalc;
          newCalc = [];
      }
      if (calc.length > 1) {
          console.log('Error: unable to resolve calculation');
          return calc;
      } else {
          return calc[0];
      }
  }

  var calculateButton = document.getElementById('calculate');
  calculateButton.onclick = function() {
  var result = calculate(parseCalculationString(homeScreen.value));
  if(homeScreen.value == ""){
    homeScreen.value = "";
  }else if (result == "Infinity"){
  secScreen.value = "Infinity";
  }else if(isNaN(result)){
  secScreen.value = "";
  }else{ 
  secScreen.value = homeScreen.value;
  homeScreen.value = result;
}};

/* ----------------------------------------------------------------- */

function currencyIlsToUsd(){
  var islToUsd = tofixed((homeScreen.value * 0.29),2);
  if(homeScreen.value === ""){
    secScreen.value = "Convert ILS. To USD.",
    homeScreen.value = "";
  }else if (isNaN(homeScreen.value)){
    secScreen.value = "Invalid Value" + ' (' + homeScreen.value + ')';
    homeScreen.value = "";
  }else if (homeScreen.value < 0 ){
    secScreen.value = "Only Positive Values";
    homeScreen.value = "";
  }else{
    secScreen.value = homeScreen.value + ' ILS' + ' =' + ' ' + islToUsd + ' USD';
    homeScreen.value = islToUsd;}};

/* ----------------------------------------------------------------- */

function currencyUsdToIls(){
  var usdToIls = tofixed((homeScreen.value * 3.45),2);
  if(homeScreen.value === ""){
    secScreen.value = "Convert USD. To ILS.",
    homeScreen.value = "";
  }else if (isNaN(homeScreen.value)){
    secScreen.value = "Invalid Value" + ' (' + homeScreen.value + ')';
    homeScreen.value = "";
  }else if (homeScreen.value < 0 ){
    secScreen.value = "Only Positive Values";
    homeScreen.value = "";
  }else{
    secScreen.value = homeScreen.value + ' USD'+ ' =' + ' ' + usdToIls + ' ILS';
    homeScreen.value = usdToIls;}};

/* ----------------------------------------------------------------- */

function currencyIlsToEur(){
  var ilsToEur =  tofixed((homeScreen.value * 0.26),2);
  if(homeScreen.value === ""){
    secScreen.value = "Convert ILS. To EUR.",
    homeScreen.value = "";
  }else if (isNaN(homeScreen.value)){
    secScreen.value = "Invalid Value" + ' (' + homeScreen.value + ')';
    homeScreen.value = "";
  }else if (homeScreen.value < 0 ){
    secScreen.value = "Only Positive Values";
    homeScreen.value = "";
  }else{
    secScreen.value = homeScreen.value + ' ILS' + ' =' + ' ' + ilsToEur + ' EUR';
    homeScreen.value = ilsToEur;}};

/* ----------------------------------------------------------------- */
  
function currencyEurToIls(){
  var erToIls = tofixed((homeScreen.value * 3.87),2);
  if(homeScreen.value === ""){
    secScreen.value = "Convert EUR. To ILS.",
    homeScreen.value = "";
  }else if (isNaN(homeScreen.value)){
    secScreen.value = "Invalid Value" + ' (' + homeScreen.value + ')';
    homeScreen.value = "";
  }else if (homeScreen.value < 0 ){
    secScreen.value = "Only Positive Values";
    homeScreen.value = "";
  }else{
    secScreen.value = homeScreen.value + ' EUR' + ' =' + ' ' + erToIls + ' ILS';
    homeScreen.value = erToIls;}};

  /* ----------------------------------------------------------------- */