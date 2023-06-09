"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express')
const express_1 = __importDefault(require("express")); // enables auto completion + npm i --save-dev @types/express
const todos_1 = __importDefault(require("./routes/todos"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
var log = console.log;
app.use(body_parser_1.default.json());
//app.use(express.json({ limit: '1kb' }))
app.use(todos_1.default);
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
});
