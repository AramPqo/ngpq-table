import { Action, SelectAction } from 'projects/ngpq-table/src/public-api';

export class ActionsService {
  selectActions: SelectAction[] = [
    {
      title: 'Cancel Process',
      key: 'cancel',
    },
    {
      title: 'Print Selected',
      key: 'print',
    },
    {
      title: 'Delete Selected',
      key: 'print',
    },
  ];

  actions: Action[] = [
    {
      key: 'add',
      isCreate: true,
      className: 'ngpq-btn',
      template: '+',
    },
    {
      key: 'edit',
      isUpdate: true,
      template: `<i class='fa fa-pencil'></i>`,
      className: 'edit',
    },
    {
      key: 'delete',
      template: `<i class='fa fa-trash-o'></i>`,
      className: 'delete',
    },
    {
      key: 'print',
      template: `<i class='fa fa-print'></i>`,
      className: 'print',
    },
  ];
}
