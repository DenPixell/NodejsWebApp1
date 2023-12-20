const fs = require('fs');

let writeableStream = fs.createWriteStream('question.txt');
writeableStream.write('1. ������ Node.js:\n');
writeableStream.write('   - ��� ����� Node.js � ��� �����������.\n'
    + '   - ��������� Node.js � npm (Node Package Manager).\n' + '   - ������ ������ � REPL (Read-Eval-Print Loop).\n');

writeableStream.write('2. ������ � ������:\n');
writeableStream.write('   - ������ � ������� ������� � Node.js\n'
    + '   - ������������� ��������� ������� � ������� npm.\n' + '   - ��������� ������� ����� ����������� � ���������� ��������.\n');

writeableStream.write('3. ������� ������ � ������ (File System and Streams):\n');
writeableStream.write(' - ������ � ������� � ������������ � Node.js.\n'
    + '   - ������������� ������� ��� ��������� ������.\n');

writeableStream.write('4. ����������� ����������������:\n');
writeableStream.write('   - ����� �������� (callbacks) � �������� (Promises).\n'
    + '   - ���������� async/await ��� ���������� ����������� �����.\n');

writeableStream.write('5. Express.js � ���-����������:\n');
writeableStream.write('   - �������� � Express.js � �������� ���-�������.\n'
    + '   - ������ � ���������� (routes) � ��������� ��������.\n' + '   - ������������� �� (middleware) � Express.\n');

writeableStream.write('6. WebSocket � �������� �����:\n');
writeableStream.write('   - �������� � WebSocket � ���������� Socket.io.\n'
    + '   - �������� � WebSocket � ���������� Socket.io.\n');

writeableStream.write('7. ���� ������:\n');
writeableStream.write('   - ����������� � ������ � ������ ������, ������ ��� MongoDB ��� MySQL.\n'
    + '   - �������� ������� ������ � ���������� ��������.\n');

writeableStream.write('8. �������������� � ������������:\n');
writeableStream.write('   - ���������� �������������� � ����������� � Node.js ����������.\n'
    + '   - ������ ���������� �� ����, ����� ��� �������� � CSRF (����������� �������� �������).\n');

writeableStream.end('������� ���������');
let readableStream = fs.createReadStream(
    'question.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});