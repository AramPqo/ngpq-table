import { Action } from "../models/action.model";
import { SelectAction } from "../models/select-action.model";
import { TableHeader } from "../models/table-header.model";

interface InitActions {
  actions: Action[],
  createAction: Action | null
}

export const createActions = (actions: Action[]): InitActions => {
  let createAction;

  if (
    actions?.filter(a => a.isCreate && a.isUpdate).length
    || actions?.filter(a => a.isCreate).length > 1
    || actions?.filter(a => a.isUpdate).length > 1
  ) {
    throw new Error(`Should be applied only one parameter isUpdate or isCreate`);
  }

  if (actions?.find(a => a.isCreate) && !createAction) {
    createAction = actions?.find(a => a.isCreate) as Action;
    actions = actions?.filter(a => !a.isCreate);
  } else {
    createAction = null;
  }

  return { actions, createAction };
};

export const modifiedTableHeaders =
  (selectActions: SelectAction[], tableHeaders: TableHeader[]): TableHeader[] => {
    if (selectActions?.length) {
      const selectHeader = {
        key: 'select',
        title: '',
        width: '55px',
        className: 'select-actions-td',
        isStatic: true,
        disableFilter: true,
        disableSort: true
      };

      tableHeaders = [selectHeader, ...tableHeaders];
    } else if (tableHeaders[0].isStatic) {
      tableHeaders = tableHeaders.filter((v, i) => i !== 0);
    }

    return tableHeaders;
  };