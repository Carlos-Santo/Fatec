"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsView = void 0;
const LinearStructure_1 = require("../models/LinearStructure");
const instances_1 = require("../models/instances");
class StatsView {
    getStats() {
        return {
            status: 200,
            data: {
                totalEstruturasCriadas: LinearStructure_1.LinearStructure.getCreatedStructures(),
                estruturas: [
                    {
                        id: instances_1.stack.getId(),
                        name: instances_1.stack.name,
                        tamanho: instances_1.stack.getSize(),
                        tipo: "pilha",
                    },
                    {
                        id: instances_1.queue.getId(),
                        name: instances_1.queue.name,
                        tamanho: instances_1.queue.getSize(),
                        tipo: "fila",
                    },
                    {
                        id: instances_1.list.getId(),
                        name: instances_1.list.name,
                        tamanho: instances_1.list.getSize(),
                        tipo: "lista",
                    },
                ],
            }
        };
    }
}
exports.StatsView = StatsView;
