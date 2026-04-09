"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = void 0;
const instances_1 = require("../models/instances");
class ListView {
    add() {
        return {
            status: 201,
            data: { mensagem: "Item adicionado na lista." }
        };
    }
    remove(removed) {
        if (removed === undefined) {
            return {
                status: 404,
                data: { erro: "A lista está vazia." }
            };
        }
        return {
            status: 200,
            data: { removido: removed }
        };
    }
    removeAt(removed, index) {
        if (removed === undefined) {
            return {
                status: 404,
                data: { erro: "Índice inválido para remoção." }
            };
        }
        return {
            status: 200,
            data: { removido: removed, indice: index }
        };
    }
    getAt(item, index) {
        if (item === undefined) {
            return {
                status: 404,
                data: { erro: "Índice inválido para consulta." }
            };
        }
        return {
            status: 200,
            data: { indice: index, item }
        };
    }
    peek(last) {
        if (last === undefined) {
            return {
                status: 404,
                data: { erro: "A lista está vazia." }
            };
        }
        return {
            status: 200,
            data: { ultimo: last }
        };
    }
    getAll() {
        return {
            status: 200,
            data: {
                estrutura: {
                    id: instances_1.list.getId(),
                    name: instances_1.list.name,
                },
                tamanho: instances_1.list.getSize(),
                itens: instances_1.list.getItems(),
            }
        };
    }
    clear() {
        return {
            status: 200,
            data: { mensagem: "Lista limpa com sucesso." }
        };
    }
    errorInvalidItem() {
        return {
            status: 400,
            data: { erro: "Informe o campo 'item' no corpo da requisição." }
        };
    }
    errorInvalidIndex() {
        return {
            status: 400,
            data: { erro: "O parâmetro index deve ser um número." }
        };
    }
}
exports.ListView = ListView;
