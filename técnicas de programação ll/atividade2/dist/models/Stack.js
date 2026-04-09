"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const LinearStructure_1 = require("./LinearStructure");
class Stack extends LinearStructure_1.LinearStructure {
    constructor(name = "Pilha") {
        super(name);
    }
    remove() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}
exports.Stack = Stack;
