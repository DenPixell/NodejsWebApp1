const fs = require('fs');

let writeableStream = fs.createWriteStream('question.txt');
writeableStream.write('1. Основы Node.js:\n');
writeableStream.write('   - Что такое Node.js и его архитектура.\n'
    + '   - Установка Node.js и npm (Node Package Manager).\n' + '   - Основы работы с REPL (Read-Eval-Print Loop).\n');

writeableStream.write('2. Модули и пакеты:\n');
writeableStream.write('   - Импорт и экспорт модулей в Node.js\n'
    + '   - Использование сторонних пакетов с помощью npm.\n' + '   - Понимание разницы между глобальными и локальными пакетами.\n');

writeableStream.write('3. Система файлов и потоки (File System and Streams):\n');
writeableStream.write(' - Работа с файлами и директориями в Node.js.\n'
    + '   - Использование потоков для обработки данных.\n');

writeableStream.write('4. Асинхронное программирование:\n');
writeableStream.write('   - Обзор колбэков (callbacks) и промисов (Promises).\n'
    + '   - Применение async/await для управления асинхронным кодом.\n');

writeableStream.write('5. Express.js и веб-разработка:\n');
writeableStream.write('   - Введение в Express.js и создание веб-сервера.\n'
    + '   - Работа с маршрутами (routes) и обработка запросов.\n' + '   - Промежуточное ПО (middleware) в Express.\n');

writeableStream.write('6. WebSocket и реальное время:\n');
writeableStream.write('   - Введение в WebSocket и библиотеку Socket.io.\n'
    + '   - Введение в WebSocket и библиотеку Socket.io.\n');

writeableStream.write('7. Базы данных:\n');
writeableStream.write('   - Подключение и работа с базами данных, такими как MongoDB или MySQL.\n'
    + '   - Создание моделей данных и выполнение запросов.\n');

writeableStream.write('8. Аутентификация и безопасность:\n');
writeableStream.write('   - Реализация аутентификации и авторизации в Node.js приложении.\n'
    + '   - Защита приложения от атак, таких как инъекции и CSRF (межсайтовая подделка запроса).\n');

writeableStream.end('Задание выполнено');
let readableStream = fs.createReadStream(
    'question.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});