export class FilterOption {
  constructor(
    public byCategory?: boolean,
    public pure?: boolean,
    public typeaheadTime?: number,
    public backlight?: boolean,
  ) {}
}

export class FilterDetail {
  constructor(public key: string, public title: string, public value?: any) {}
}
