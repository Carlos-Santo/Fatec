import { list } from "../models/instances";

export class ListView {
  public add(): { status: number; data: any } {
    return {
      status: 201,
      data: { mensagem: "Item adicionado na lista." }
    };
  }

  public remove(removed: any): { status: number; data: any } {
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

  public removeAt(removed: any, index: number): { status: number; data: any } {
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

  public getAt(item: any, index: number): { status: number; data: any } {
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

  public peek(last: any): { status: number; data: any } {
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

  public getAll(): { status: number; data: any } {
    return {
      status: 200,
      data: {
        estrutura: {
          id: list.getId(),
          name: list.name,
        },
        tamanho: list.getSize(),
        itens: list.getItems(),
      }
    };
  }

  public clear(): { status: number; data: any } {
    return {
      status: 200,
      data: { mensagem: "Lista limpa com sucesso." }
    };
  }

  public errorInvalidItem(): { status: number; data: any } {
    return {
      status: 400,
      data: { erro: "Informe o campo 'item' no corpo da requisição." }
    };
  }

  public errorInvalidIndex(): { status: number; data: any } {
    return {
      status: 400,
      data: { erro: "O parâmetro index deve ser um número." }
    };
  }
}