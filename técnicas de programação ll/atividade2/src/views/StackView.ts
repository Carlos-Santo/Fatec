import { stack } from "../models/instances";

export class StackView {
  public add(): { status: number; data: any } {
    return {
      status: 201,
      data: { mensagem: "Item adicionado na pilha." }
    };
  }

  public remove(removed: any): { status: number; data: any } {
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

  public peek(top: any): { status: number; data: any } {
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

  public getAll(): { status: number; data: any } {
    return {
      status: 200,
      data: {
        estrutura: {
          id: stack.getId(),
          name: stack.name,
        },
        tamanho: stack.getSize(),
        itens: stack.getItems(),
      }
    };
  }

  public clear(): { status: number; data: any } {
    return {
      status: 200,
      data: { mensagem: "Pilha limpa com sucesso." }
    };
  }

  public errorInvalidItem(): { status: number; data: any } {
    return {
      status: 400,
      data: { erro: "Informe o campo 'item' no corpo da requisição." }
    };
  }
}