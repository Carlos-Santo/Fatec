"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueView = void 0;
const instances_1 = require("../models/instances");
class QueueView {
    add() {
        return {
            status: 201,
            data: { mensagem: "Item adicionado na fila." }
        };
    }
    remove(removed) {
        if (removed === undefined) {
            return {
                status: 404,
                data: { erro: "A fila está vazia." }
            };
        }
        return {
            status: 200,
            data: { removido: removed }
        };
    }
    peek(front) {
        if (front === undefined) {
            return {
                status: 404,
                data: { erro: "A fila está vazia." }
            };
        }
        return {
            status: 200,
            data: { frente: front }
        };
    }
    getAll() {
        return {
            status: 200,
            data: {
                estrutura: {
                    id: instances_1.queue.getId(),
                    name: instances_1.queue.name,
                },
                tamanho: instances_1.queue.getSize(),
                itens: instances_1.queue.getItems(),
            }
        };
    }
    clear() {
        return {
            status: 200,
            data: { mensagem: "Fila limpa com sucesso." }
        };
    }
    errorInvalidItem() {
        return {
            status: 400,
            data: { erro: "Informe o campo 'item' no corpo da requisição." }
        };
    }
}
exports.QueueView = QueueView;
