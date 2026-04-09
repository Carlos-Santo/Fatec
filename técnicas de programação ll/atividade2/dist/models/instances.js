"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.queue = exports.stack = void 0;
const ListStructure_1 = require("./ListStructure");
const Queue_1 = require("./Queue");
const Stack_1 = require("./Stack");
exports.stack = new Stack_1.Stack("Pilha Principal");
exports.queue = new Queue_1.Queue("Fila Principal");
exports.list = new ListStructure_1.ListStructure("Lista Principal");
