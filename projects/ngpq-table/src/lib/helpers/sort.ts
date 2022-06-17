import { SortEvent } from "../models/sort.model";

export const isTemplate = (value: { value: any, template: string } | string | number) => typeof value === 'object' && 'template' in value && 'value' in value;

export const isSame = (column: string, data) => {
  if (isTemplate(data[0][column])) {
    return !(data.filter(v => v[column].value === data[0][column].value).length === data.length);
  } else {
    return !(data.filter(v => v.value === data[0][column]).length === data.length);
  }
};

export const doSort = (data: any[], { column, direction }: SortEvent) => {
  const compare = (v1: string, v2: string) => v1.toString().localeCompare(v2.toString());
  data.sort((a, b) => {
    let result;

    if (isTemplate(a[column]) && isTemplate(b[column])) {
      result = compare(a[column].value, b[column].value);
    } else {
      result = compare(a[column], b[column]);
    }

    return direction === 'asc' ? result : -result;
  });
};
