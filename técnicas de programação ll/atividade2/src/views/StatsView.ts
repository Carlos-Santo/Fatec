import { LinearStructure } from "../models/LinearStructure";
import { list, queue, stack } from "../models/instances";

export class StatsView {
  public getStats(): { status: number; data: any } {
    return {
      status: 200,
      data: {
        totalEstruturasCriadas: LinearStructure.getCreatedStructures(),
        estruturas: [
          {
            id: stack.getId(),
            name: stack.name,
            tamanho: stack.getSize(),
            tipo: "pilha",
          },
          {
            id: queue.getId(),
            name: queue.name,
            tamanho: queue.getSize(),
            tipo: "fila",
          },
          {
            id: list.getId(),
            name: list.name,
            tamanho: list.getSize(),
            tipo: "lista",
          },
        ],
      }
    };
  }
}