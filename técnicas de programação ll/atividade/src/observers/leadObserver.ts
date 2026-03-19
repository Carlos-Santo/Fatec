import { Lead } from "../models/Lead";

type Observer = (lead: Lead) => void;

export class LeadObserver {
  private observers: Observer[] = [];

  subscribe(fn: Observer) {
    this.observers.push(fn);
  }

  notify(lead: Lead) {
    this.observers.forEach(fn => fn(lead));
  }
}