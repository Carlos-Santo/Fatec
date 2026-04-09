"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStructure = void 0;
const LinearStructure_1 = require("./LinearStructure");
class ListStructure extends LinearStructure_1.LinearStructure {
    constructor(name = "Lista") {
        super(name);
    }
    remove() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    getAt(index) {
        if (index < 0 || index >= this.items.length) {
            return undefined;
        }
        return this.items[index];
    }
    removeAt(index) {
        if (index < 0 || index >= this.items.length) {
            return undefined;
        }
        const [removed] = this.items.splice(index, 1);
        return removed;
    }
}
exports.ListStructure = ListStructure;
