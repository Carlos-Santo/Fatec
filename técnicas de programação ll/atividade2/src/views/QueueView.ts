import { queue } from "../models/instances";

export class QueueView {
  public add(): { status: number; data: any } {
    return {
      status: 201,
      data: { mensagem: "Item adicionado na fila." }
    };
  }

  public remove(removed: any): { status: number; data: any } {
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

  public peek(front: any): { status: number; data: any } {
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

  public getAll(): { status: number; data: any } {
    return {
      status: 200,
      data: {
        estrutura: {
          id: queue.getId(),
          name: queue.name,
        },
        tamanho: queue.getSize(),
        itens: queue.getItems(),
      }
    };
  }

  public clear(): { status: number; data: any } {
    return {
      status: 200,
      data: { mensagem: "Fila limpa com sucesso." }
    };
  }

  public errorInvalidItem(): { status: number; data: any } {
    return {
      status: 400,
      data: { erro: "Informe o campo 'item' no corpo da requisição." }
    };
  }
}