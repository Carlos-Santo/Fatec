"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearStructure = void 0;
class LinearStructure {
    constructor(name) {
        this.items = [];
        this.name = name;
        LinearStructure.createdStructures += 1;
        this.id = LinearStructure.createdStructures;
    }
    add(item) {
        this.items.push(item);
    }
    getItems() {
        return [...this.items];
    }
    getSize() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    getId() {
        return this.id;
    }
    static getCreatedStructures() {
        return LinearStructure.createdStructures;
    }
}
exports.LinearStructure = LinearStructure;
LinearStructure.createdStructures = 0;
