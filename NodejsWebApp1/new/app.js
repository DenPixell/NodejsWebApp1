// получаем модуль Express
const express = require('express');
// создаем приложение
const app = express();

// устанавливаем обработчик для маршрута "/"
app.get('/', function (request, response) {
    response.end('Hello from Express!');
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);

let name = process.argv[2];
let age = process.argv[3];

console.log('name: ' + name);
console.log('age: ' + age);

const http = require('http');

let message = 'Hello World!';
http.createServer(function (request, response) {
    console.log(message);
    response.end(message);
}).listen(3000, '127.0.0.1', () => {
    console.log('Сервер начал прослушивание запросов');
});

function displaySync(data) {
    console.log(data);
}

console.log('Начало работы программы');

displaySync('Обработка данных...');

console.log('Завершение работы программы');

function display(data, callback) {
    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 5
            ? new Error(
                'Ошибка выполнения. randInt больше 5'
            )
            : null;

    setTimeout(function () {
        callback(err, data);
    }, 0);
}

console.log('Начало работы программы');

display('Обработка данных...', function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log('Завершение работы программы');

function displaySync(callback) {
    callback();
}

console.log('Начало работы программы');

setTimeout(function () {
    console.log('timeout 500');
}, 500);

setTimeout(function () {
    console.log('timeout 100');
}, 100);

displaySync(function () {
    console.log('without timeout');
});
console.log('Завершение работы программы');

const fs = require('fs');

// асинхронное чтение
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('Асинхронное чтение файла');
    if (error) throw error; // если возникла ошибка
    console.log(data); // выводим считанные данные
});

// синхронное чтение
console.log('Синхронное чтение файла');
let fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);

const fs = require('fs');

fs.writeFile('hello.txt', 'Hello мир!', function (error) {
    if (error) throw error; // если возникла ошибка
    console.log(
        'Асинхронная запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // выводим считанные данные
});
//события 
const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('Привет!');
});

emitter.emit(eventName);


const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, 'Привет пир!');


const util = require('util');
const EventEmitter = require('events');

function User() { }
util.inherits(User, EventEmitter);

let eventName = 'greet';
User.prototype.sayHi = function (data) {
    this.emit(eventName, data);
};
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('Мне нужна твоя одежда...');


const EventEmitter = require('events');

let eventName = 'greet';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('Мне нужна твоя одежда...');
