import { Lead } from "../models/Lead";

export class LeadFactory {
  static create(data: any): Lead {
    const validOrigins = ["visita presencial", "telefone", "WhatsApp", "Instagram"];

    if (!validOrigins.includes(data.origem)) {
      throw new Error("Origem inválida");
    }

    return {
      id: Date.now(),
      nome: data.nome,
      telefone: data.telefone,
      origem: data.origem,
      veiculo: data.veiculo,
      estagio: "Contato inicial",
      status: "Aberto"
    };
  }
}