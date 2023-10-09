//1
const http = require('http');
http.createServer(function (request, response) {
    response.end('Hello NodeJS!');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});
//2
console.log('greeting module');

const os = require('os');
const greeting = require('./greeting');

global.name = 'Eugene';

global.console.log(date);
console.log(greeting.getMessage());

// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

console.log(userName);



const User = require('./user.js');

let eugene = new User('Eugene', 32);
eugene.sayHi();


//3
var greeting1 = require('./greeting.js');
console.log(`Hello ${greeting1.name}`); //Hello Alice

var greeting2 = require('./greeting.js');
greeting2.name = 'Bob';

console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob

const welcome = require('./welcome');

welcome.getMorningMessage();
welcome.getEveningMessage();

//4

