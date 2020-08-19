'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = new _PostController2.default();

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb://localhost/blog1');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.post('/posts', Post.create);
//Получение записей
app.get('/posts', Post.index);
//Удаление записей
app.delete('/posts/:id', Post.delete);
//Обновление записи
app.patch('/posts/:id', Post.update);
app.get('/posts/:id', Post.read);

app.listen(3333, function () {
  console.log('SERVER STARTED!');
});