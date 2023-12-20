// �������� ������ Express
const express = require('express');
// ������� ����������
const app = express();

// ������������� ���������� ��� �������� "/"
app.get('/', function (request, response) {
    response.end('Hello from Express!');
});
// �������� ������������� ����������� �� 3000 �����
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
    console.log('������ ����� ������������� ��������');
});

function displaySync(data) {
    console.log(data);
}

console.log('������ ������ ���������');

displaySync('��������� ������...');

console.log('���������� ������ ���������');

function display(data, callback) {
    // � ������� ���������� ����� ���������� ������
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 5
            ? new Error(
                '������ ����������. randInt ������ 5'
            )
            : null;

    setTimeout(function () {
        callback(err, data);
    }, 0);
}

console.log('������ ������ ���������');

display('��������� ������...', function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log('���������� ������ ���������');

function displaySync(callback) {
    callback();
}

console.log('������ ������ ���������');

setTimeout(function () {
    console.log('timeout 500');
}, 500);

setTimeout(function () {
    console.log('timeout 100');
}, 100);

displaySync(function () {
    console.log('without timeout');
});
console.log('���������� ������ ���������');

const fs = require('fs');

// ����������� ������
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('����������� ������ �����');
    if (error) throw error; // ���� �������� ������
    console.log(data); // ������� ��������� ������
});

// ���������� ������
console.log('���������� ������ �����');
let fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);

const fs = require('fs');

fs.writeFile('hello.txt', 'Hello ���!', function (error) {
    if (error) throw error; // ���� �������� ������
    console.log(
        '����������� ������ ����� ���������. ���������� �����:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // ������� ��������� ������
});
//������� 
const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('������!');
});

emitter.emit(eventName);


const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, '������ ���!');


const util = require('util');
const EventEmitter = require('events');

function User() { }
util.inherits(User, EventEmitter);

let eventName = 'greet';
User.prototype.sayHi = function (data) {
    this.emit(eventName, data);
};
let user = new User();
// ��������� � ������� user ��������� ������� "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('��� ����� ���� ������...');


const EventEmitter = require('events');

let eventName = 'greet';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
// ��������� � ������� user ��������� ������� "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('��� ����� ���� ������...');
