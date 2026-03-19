import { leads } from "../data/leads";
import { LeadFactory } from "../factories/leadFactory";
import { LeadState } from "../states/leadState";
import { LeadObserver } from "../observers/leadObserver";

const observer = new LeadObserver();

observer.subscribe((lead) => {
  console.log("Lead atualizada:", lead);
});

export class LeadFacade {
  static create(data: any) {
    const lead = LeadFactory.create(data);
    leads.push(lead);
    observer.notify(lead);
    return lead;
  }

  static list() {
    return leads;
  }

  static get(id: number) {
    return leads.find(l => l.id === id);
  }

  static advance(id: number) {
    const lead = this.get(id);
    if (!lead) throw new Error("Lead não encontrada");

    LeadState.advance(lead);
    observer.notify(lead);
    return lead;
  }

  static finalize(id: number, success: boolean) {
    const lead = this.get(id);
    if (!lead) throw new Error("Lead não encontrada");

    LeadState.finalize(lead, success);
    observer.notify(lead);
    return lead;
  }
}