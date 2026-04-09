"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const LinearStructure_1 = require("./LinearStructure");
class Queue extends LinearStructure_1.LinearStructure {
    constructor(name = "Fila") {
        super(name);
    }
    remove() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
}
exports.Queue = Queue;
