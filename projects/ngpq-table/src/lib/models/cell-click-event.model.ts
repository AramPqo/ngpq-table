export class CellData {
  constructor(
    public row: any,
    public settingsKey: string,
    public index: number,
    public value: any,
    public event: MouseEvent
  ) { }
}
