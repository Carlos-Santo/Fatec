import { Lead } from "../models/Lead";

export class LeadState {
  static advance(lead: Lead) {
    if (lead.status.includes("Finalizado")) {
      throw new Error("Lead já finalizada");
    }

    switch (lead.estagio) {
      case "Contato inicial":
        lead.estagio = "Enviou proposta";
        lead.status = "Em negociação";
        break;

      case "Enviou proposta":
        lead.estagio = "Aguardando resposta do cliente";
        break;

      case "Aguardando resposta do cliente":
        lead.estagio = "Aguardando pagamento";
        break;

      default:
        throw new Error("Não pode avançar");
    }
  }

  static finalize(lead: Lead, success: boolean) {
    lead.status = success
      ? "Finalizado com venda"
      : "Finalizado sem venda";
  }
}