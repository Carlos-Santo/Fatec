"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListController = void 0;
const instances_1 = require("../models/instances");
const ListView_1 = require("../views/ListView");
class ListController {
    constructor() {
        this.view = new ListView_1.ListView();
    }
    add(req, res) {
        const { item } = req.body;
        if (item === undefined) {
            const response = this.view.errorInvalidItem();
            res.status(response.status).json(response.data);
            return;
        }
        instances_1.list.add(item);
        const response = this.view.add();
        res.status(response.status).json(response.data);
    }
    remove(_req, res) {
        const removed = instances_1.list.remove();
        const response = this.view.remove(removed);
        res.status(response.status).json(response.data);
    }
    removeAt(req, res) {
        const index = Number(req.params.index);
        if (Number.isNaN(index)) {
            const response = this.view.errorInvalidIndex();
            res.status(response.status).json(response.data);
            return;
        }
        const removed = instances_1.list.removeAt(index);
        const response = this.view.removeAt(removed, index);
        res.status(response.status).json(response.data);
    }
    getAt(req, res) {
        const index = Number(req.params.index);
        if (Number.isNaN(index)) {
            const response = this.view.errorInvalidIndex();
            res.status(response.status).json(response.data);
            return;
        }
        const item = instances_1.list.getAt(index);
        const response = this.view.getAt(item, index);
        res.status(response.status).json(response.data);
    }
    peek(_req, res) {
        const last = instances_1.list.peek();
        const response = this.view.peek(last);
        res.status(response.status).json(response.data);
    }
    getAll(_req, res) {
        const response = this.view.getAll();
        res.status(response.status).json(response.data);
    }
    clear(_req, res) {
        instances_1.list.clear();
        const response = this.view.clear();
        res.status(response.status).json(response.data);
    }
}
exports.ListController = ListController;
