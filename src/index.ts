import 'reflect-metadata';

import express from 'express';
import Container from 'typedi';
import { UserController } from './controllers/users-controller';

const app = express();
const userController = Container.get(UserController);

// app.get('/user', userController.getAll); // Se ficar desse jeito não funciona
app.get('/user', (req, res) => userController.getAll(req, res)); // Tem que ser assim
app.get('/user/:id', (req, res) => userController.getOne(req, res));

app.listen(3333);
