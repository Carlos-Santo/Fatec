"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackView = void 0;
const instances_1 = require("../models/instances");
class StackView {
    add() {
        return {
            status: 201,
            data: { mensagem: "Item adicionado na pilha." }
        };
    }
    remove(removed) {
        if (removed === undefined) {
            return {
                status: 404,
                data: { erro: "A pilha está vazia." }
            };
        }
        return {
            status: 200,
            data: { removido: removed }
        };
    }
    peek(top) {
        if (top === undefined) {
            return {
                status: 404,
                data: { erro: "A pilha está vazia." }
            };
        }
        return {
            status: 200,
            data: { topo: top }
        };
    }
    getAll() {
        return {
            status: 200,
            data: {
                estrutura: {
                    id: instances_1.stack.getId(),
                    name: instances_1.stack.name,
                },
                tamanho: instances_1.stack.getSize(),
                itens: instances_1.stack.getItems(),
            }
        };
    }
    clear() {
        return {
            status: 200,
            data: { mensagem: "Pilha limpa com sucesso." }
        };
    }
    errorInvalidItem() {
        return {
            status: 400,
            data: { erro: "Informe o campo 'item' no corpo da requisição." }
        };
    }
}
exports.StackView = StackView;
