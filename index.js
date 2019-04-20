let para = document.getElementById('para');
para.innerHTML = 'hello world!'

// index.js
var moment = require('moment');

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

console.log('testing webpack npm server again!');
