"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackController = void 0;
const instances_1 = require("../models/instances");
const StackView_1 = require("../views/StackView");
class StackController {
    constructor() {
        this.view = new StackView_1.StackView();
    }
    add(req, res) {
        const { item } = req.body;
        if (item === undefined) {
            const response = this.view.errorInvalidItem();
            res.status(response.status).json(response.data);
            return;
        }
        instances_1.stack.add(item);
        const response = this.view.add();
        res.status(response.status).json(response.data);
    }
    remove(_req, res) {
        const removed = instances_1.stack.remove();
        const response = this.view.remove(removed);
        res.status(response.status).json(response.data);
    }
    peek(_req, res) {
        const top = instances_1.stack.peek();
        const response = this.view.peek(top);
        res.status(response.status).json(response.data);
    }
    getAll(_req, res) {
        const response = this.view.getAll();
        res.status(response.status).json(response.data);
    }
    clear(_req, res) {
        instances_1.stack.clear();
        const response = this.view.clear();
        res.status(response.status).json(response.data);
    }
}
exports.StackController = StackController;
