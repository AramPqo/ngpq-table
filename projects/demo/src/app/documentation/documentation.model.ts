import { DataTemplate } from "projects/ngpq-table/src/lib/models/data-template.model";

class Documentation {
  constructor(
    public type: string,
    public description: string | DataTemplate
  ) { }
}

interface InputDoc extends Documentation {
  input: string;
}

interface OutputDoc extends Documentation {
  output: string;
}

export interface StateInfo {
  key: string;
  title: string;
}

export interface State {
  optionalData: InputDoc[];
  requredData: InputDoc[];
  outputData: OutputDoc[];
  event: any[];
}
