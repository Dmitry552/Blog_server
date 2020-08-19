import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import PostController from './controllers/PostController';
var Post = new PostController();

var app = express();
mongoose.connect('mongodb://localhost/blog1');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.post('/posts', Post.create);
//Получение записей
app.get('/posts', Post.index);
//Удаление записей
app.delete('/posts/:id', Post.delete);
//Обновление записи
app.patch('/posts/:id', Post.update);
app.get('/posts/:id', Post.read);

app.listen(3333, () => {
  console.log('SERVER STARTED!');
})

