import { FilterOption } from 'projects/ngpq-table/src/public-api';
import { FormGroup } from '@angular/forms';

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
    public filterOptions: FilterOption | FormGroup,
  ) {}
}
