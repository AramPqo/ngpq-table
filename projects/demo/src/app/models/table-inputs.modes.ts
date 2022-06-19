import { FilterOption } from 'projects/ngpq-table/src/public-api';

export class TableInputs {
  constructor(
    public selectActions: boolean,
    public actions: boolean,
    public detailsTemplate: boolean,
    public disableResize: boolean,
    public scrollToTop: boolean,
    public disablePaginate: boolean,
    public disableSort: boolean,
    public paginatorSize: number,
    public noDataWarning: boolean,
    public directionLinks: boolean,
    public filterOptions: FilterOption,
  ) {}
}
