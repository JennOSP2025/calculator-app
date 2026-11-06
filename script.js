let plusBtn = document.querySelector('#plusBtn');
let minusBtn = document.querySelector('#minusBtn');
let timesBtn = document.querySelector('#timesBtn');
let divideBtn = document.querySelector('#divideBtn');


let Btn0 = document.querySelector('#Btn0');
let Btn1 = document.querySelector('#Btn1');
let Btn2 = document.querySelector('#Btn2');
let Btn3 = document.querySelector('#Btn3');
let Btn4 = document.querySelector('#Btn4');
let Btn5 = document.querySelector('#Btn5');
let Btn6 = document.querySelector('#Btn6');
let Btn7 = document.querySelector('#Btn7');
let Btn8 = document.querySelector('#Btn8');
let Btn9 = document.querySelector('#Btn9');


let decimalBtn = document.querySelector('#decimalBtn');
let equalBtn = document.querySelector('#equal');
let clearBtn = document.querySelector('#clear');


let inputEle = document.querySelector('#display');


function appendToDisplay(input) {
   if (inputEle.value === 'ERROR') {
       inputEle.value = '';
   }


   inputEle.value = inputEle.value + input;
}


// Operator buttons
plusBtn.onclick = function() {
   appendToDisplay('+');
};


minusBtn.onclick = function() {
   appendToDisplay('-');
};


timesBtn.onclick = function() {
   appendToDisplay('*');
};


divideBtn.onclick = function() {
   appendToDisplay('/');
};


// Number buttons
Btn0.onclick = function() {
   appendToDisplay('0');
};


Btn1.onclick = function() {
   appendToDisplay('1');
};


Btn2.onclick = function() {
   appendToDisplay('2');
};


Btn3.onclick = function() {
   appendToDisplay('3');
};


Btn4.onclick = function() {
   appendToDisplay('4');
};


Btn5.onclick = function() {
   appendToDisplay('5');
};


Btn6.onclick = function() {
   appendToDisplay('6');
};


Btn7.onclick = function() {
   appendToDisplay('7');
};


Btn8.onclick = function() {
   appendToDisplay('8');
};


Btn9.onclick = function() {
   appendToDisplay('9');
};


// Decimal button
decimalBtn.onclick = function() {
   appendToDisplay('.');
};


// Equal button
equalBtn.onclick = function() {
   try {
       if (inputEle.value.trim() === '') {
           return;
       }


       inputEle.value = eval(inputEle.value);


       if (!Number.isFinite(Number(inputEle.value))) {
           inputEle.value = 'ERROR';
       }
   } catch (error) {
       inputEle.value = 'ERROR';
   }
};


// Clear button
clearBtn.onclick = function() {
   inputEle.value = '';
};


