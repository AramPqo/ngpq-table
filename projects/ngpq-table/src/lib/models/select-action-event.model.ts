import { SelectAction } from "./select-action.model";

export class SelectActionEvent {
  constructor(
    public method: SelectAction,
    public rows: any[]
  ) { }
}