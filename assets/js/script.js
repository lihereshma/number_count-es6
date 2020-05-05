/* Author:Reshma */
const number = document.querySelector('.number');
var count = 0;

const increment  = document.getElementById('increment');
const decrement  = document.getElementById('decrement');

const addNumber = () => number.innerHTML = ++count;
const lowerNumber = () => number.innerHTML = --count;

increment.addEventListener('click', addNumber);
decrement.addEventListener('click', lowerNumber);