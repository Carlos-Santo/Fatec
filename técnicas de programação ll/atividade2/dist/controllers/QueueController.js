"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueController = void 0;
const instances_1 = require("../models/instances");
const QueueView_1 = require("../views/QueueView");
class QueueController {
    constructor() {
        this.view = new QueueView_1.QueueView();
    }
    add(req, res) {
        const { item } = req.body;
        if (item === undefined) {
            const response = this.view.errorInvalidItem();
            res.status(response.status).json(response.data);
            return;
        }
        instances_1.queue.add(item);
        const response = this.view.add();
        res.status(response.status).json(response.data);
    }
    remove(_req, res) {
        const removed = instances_1.queue.remove();
        const response = this.view.remove(removed);
        res.status(response.status).json(response.data);
    }
    peek(_req, res) {
        const front = instances_1.queue.peek();
        const response = this.view.peek(front);
        res.status(response.status).json(response.data);
    }
    getAll(_req, res) {
        const response = this.view.getAll();
        res.status(response.status).json(response.data);
    }
    clear(_req, res) {
        instances_1.queue.clear();
        const response = this.view.clear();
        res.status(response.status).json(response.data);
    }
}
exports.QueueController = QueueController;
