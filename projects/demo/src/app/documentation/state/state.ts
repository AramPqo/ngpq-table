export const COMMON = {
  requiredData: [
    {
      input: 'data',
      type: 'Array<any>',
      description: {
        template: `
          Basic data that is displayed in the table (Works both sync. and async).
          What we see in table is dependent on data structure, 
          If there is no template <a class="link"s link="github/datatemplate"> template </a> 
          then table view will show corresponding value;
          It is also possible to show in the table view <a class="link"s link="github/customComponent"> custom component </a> created by you.
          <a href="/" target="_blanck" class="link">Example.</a>
          `,
      },
    },
    {
      input: 'settings',
      type: '{ [key: string]: Settings; }',
      description: {
        template: `
        <span class="info"> Settings provide Table Cells: </span> Width, class name, <a link="form" class="link" link="form">form</a> , disable sorting, disable filtering, Render custom Component
        It provides each column.
        More info. about <a link="settings" class="link"> Settings. </a>
        `,
      },
    },
  ],
  optionalData: [
    {
      input: 'filterOptions',
      type: 'FilterOption',
      description: {
        template: `
        Filter does not work without this input. This is used to customize option of filter. You can see an 
        <a href="https://github.com/AramPqo/ngpq-table/blob/master/src/app/example/example.component.ts#L66" target="_blanck" class="link"> example here </a>
        `,
      },
    },
    {
      input: 'pageSizeOptions',
      type: 'Array<number | string>',
      description: 'Provides the count of rows in the table.',
    },
    {
      input: 'actions',
      type: 'Array<Action>',
      description: {
        template: `
        There are 2 embedded actions: create and update.
        For create and update it is required to use corresponding <span class="code">isCreate</span> and <span class="code">isUpdate</span> bolleans;
        More info. about <a link="actions" class="link"> Actions. </a>
        `,
      },
    },
    {
      input: 'selectActions',
      type: 'Array<SelectAction>',
      description: {
        template: `
        It is for multiple rows. You can get the <a link="selectActionEvent" class="link">SelectActionEvent</a> by clicking on the dropdown on the left.
        More info. about <a link="selectActions" class="link"> Select Actions. </a>
        `,
      },
    },
    {
      input: 'paginatorSize',
      type: 'number',
      description: {
        template: `
          Maximum amount of paginator items. <span class="type-content"> Default 6.<span>
        `,
      },
    },
    {
      input: 'disableResize',
      type: 'boolean',
      description: 'Disable Resizing.',
    },
    {
      input: 'disablePaginate',
      type: 'boolean',
      description: 'Disable Paginate.',
    },
    {
      input: 'scrollToTop',
      type: 'boolean',
      description: 'It scrolls up, when there is an action going on below.',
    },
    {
      input: 'detailsTemplate',
      type: 'TemplateRef<any>',
      description: {
        template: `
          The <span class="type-content"> TemplateRef&lt;any&gt </span>
          type input should be provide it, after click on the row it will open like accordeon
          and your template will be in it.
          <a href="github/" target="_blanck" class="link">Example</a>.
        `,
      },
    },
    {
      input: 'title',
      type: 'Title',
      description: `
        Column title
        `,
    },
    {
      input: 'width',
      type: 'Width',
      description: `
        Column width (px or %)
        `,
    },
    {
      input: 'className',
      type: 'className',
      description: `
       Column class
      `,
    },
    {
      input: 'disableSort',
      type: 'boolean',
      description: 'Disable Sort',
    },
    {
      input: 'disableFilter',
      type: 'boolean',
      description: 'Disable Filter',
    },
  ],

  outputData: [
    // {
    //   output: 'actionEvent',
    //   type: 'ActionEvent',
    //   description: {
    //     template: `
    //       actionEvent-@ emit a anum, Action-i event@.
    //       Ete action-d isCreate-a kam isUpdate, ed depqum stanum es formi valid value-n row-i mej isk action-um stanum es action-i key@.
    //       avelin imanalu hamar: <a link="ActionEvent" class="link"> ActionEvent </a>
    //       Returns /// You can add custom action by clicking on the action content, after that you will receive the action event.
    //       kdzes action form event if the action  <span class="code">isCreate</span> or <span class="code">isUpdate</span> else action
    //       `
    //   }
    // },
    // {
    //   output: 'selectedActionEvent',
    //   type: 'SelectActionEvent',
    //   description: {
    //     template: `
    //     Returns an selected actions and selected rows value.
    //     avel tenalu hamar > link kdnem ste
    //     `
    //   }
    // },
    // {
    //   output: 'detectSelected',
    //   type: 'Array<any>',
    //   description: 'Returns selected rows when user selects row.'
    // },
    // {
    //   output: 'rowClick',
    //   type: 'RowData',
    //   description: {
    //     template: `
    //     emit a anum RowData tipi data erb vor click es anum luboy row-i vra
    //     avelin tenalu hamar xndrum enq click areq i.t.d. linkin`
    //   }
    // },
    // {
    //   output: 'cellClick',
    //   type: 'CellData',
    //   description: {
    //     template: `
    //     emit a anum CellData tipi data erb vor click es anum luboy cell-i vra
    //     avelin tenalu hamar xndrum enq click areq i.t.d. linkin`
    //   }
    // },
    // {
    //   output: 'mouseOver',
    //   type: 'MouseEvent',
    //   description: 'table-i vra MouseOver-i jamanak returns dra event@'
    // },
  ],
};

export const SETTINGS = {
  requiredData: [
    {
      input: 'title',
      type: 'string',
      description: `
        Column title
        `,
    },
  ],
  optionalData: [
    {
      input: 'width',
      type: 'string',
      description: `
        Column width ('em, rem, pt, cm, px' or %)
        `,
    },
    {
      input: 'className',
      type: 'string',
      description: `
       Column class
      `,
    },
    {
      input: 'disableSort',
      type: 'boolean',
      description: 'Disable Sorting',
    },
    {
      input: 'disableFilter',
      type: 'boolean',
      description: 'Disable Filtering',
    },
    {
      input: 'renderComponent',
      type: 'any',
      description: {
        template: `
        Component with which you can get current value and show as you want.
        You can see an <a href="example"> example here </a>
        `,
      },
    },
    {
      input: 'form',
      type: 'SettingsForm',
      description: {
        template: `
        Form propetry is used to have the opportunity embedded <span class="code">create</span> or <span class="code">update</span>.
        Form propetry can have Error Message, Placeholder, e.t.c. given by you.
        For more info. you can see an example <a link="form" class="link" link="form">Example</a> 
      `,
      },
    },
  ],
};

export const FORM = {
  optionalData: [
    {
      input: 'control',
      type: 'Array<any | Array<Validators>>',
      description: {
        template: `
        <div> Control can be either Array &lt;any&gt; type or Array 
        &lt;<a href="https://angular.io/api/forms/Validators" target="_blanck" class="link">Validators</a>&gt; type. </div>
        <div> It works like 'ReactiveFormsModule', but there are some differences. </div>
        If there is no need for default value the first item should be 'null',
        otherwise it will be 'string' or 'number' (for boolean and other types we have <span class="info"> type </span> propery).
        which during the <span class="code"> create </span> set item value in the form as default value.
        The Second item getting Validators array as in 
        <a href="https://angular.io/guide/form-validation#validating-input-in-reactive-forms" target="_blanck" class="link"> Angular Reactive Forms Validators</a>
        <br/>
        <br/>
        <a href="github/" target="_blanck" class="link">Example</a>

       <span><a href="github/" target="_blanck" class="link"> ReactiveFormsModule</a> </span>.
        /* { [key: string]: Settings; }	*/ Please note, key must be the same as a key in data array objects.
        karas routerlink dnes orinak { [key: string]: <link> Settings </link>; } dnes 
        click anen ed linkin @ngnen Settingsi mej heto noric SettingsForm-in click ani
        haytnvi SettingsForm-i route-um 
        `,
      },
    },
    {
      input: 'type',
      type: 'string',
      description: `
        Type is used for haveing checkbox (default false), textarea or select.
      `,
    },
    {
      input: 'disabled',
      type: 'boolean',
      description: `
        Disables the input.
      `,
    },
    {
      input: 'actions',
      type: 'Array<Action>',
      description: `
        There are two inline actions: create and update.
        For inline actions it is required to use (to create) <span class="code">isCreate</span> (to update) <span class="code">isUpdate</span> in the boolean action inputs.
        `,
    },
    {
      input: 'placeholder',
      type: 'string',
      description: `
       Gives the placeholder.
      `,
    },
    {
      input: 'errorMessage',
      type: 'string',
      description: `
       Gives the Error Message
      `,
    },
  ],
};

export const FILTER_OPTIONS = {
  optionalData: [
    {
      input: 'byCategory',
      type: 'boolean',
      description: {
        template: `
          Default false. If it is true then the filter works by categories (in selected table cell).
          If it is false then it gets filtered for all table cells.
        `,
      },
    },
    {
      input: 'pure',
      type: 'boolean',
      description: {
        template: `
            Default false, If it is true then it return coresponding items.
            If it is false then it return simillar items.
          `,
      },
    },
    {
      input: 'typeaheadTime',
      type: 'number',
      description: {
        template: `
            Default 2000ms, (it works only during <span class="code">{byCategory: false}</span> mode)
            
            mode-ի, ֆիլտրացնելու-search-ի ժամանակն ա, միլիսեկունդաներով miliseconds
          `,
      },
    },
    {
      input: 'backlight',
      type: 'boolean',
      description: {
        template: `
          Default false, երբ որ true  ա լինում (ու երբ որ byCategory-ն false ա - կամ 
          <span class="code">{byCategory: false} mode-ի ժամանակ</span>), էդ ժամանակ պոդցվետկայա տալի:D համնկած բարեը
          `,
      },
    },
  ],
};

export const ACTION = {
  // requiredData: [
  //   {
  //     input: 'template',
  //     type: 'string',
  //     description: 'template-ի միջոցով կարաս տվյալ action-իդ համար քո HTML template-ը ունենաս'
  //   }
  // ],
  // optionalData: [
  //   {
  //     input: 'key',
  //     type: 'string',
  //     description: 'The key of action.'
  //   },
  //   {
  //     input: 'className',
  //     type: 'string',
  //     description: 'Action class name.'
  //   },
  //   {
  //     input: 'isCreate',
  //     type: 'boolean',
  //     description: 'custom create-ի համար, եթե true ա ուրեմն ունենում էնք create-ի համար միհատ <a link="form">form</a>'
  //   },
  //   {
  //     input: 'isUpdate',
  //     type: 'boolean',
  //     description: 'custom update-ի համար, եթե true ա ուրեմն ունենում էնք update-ի համար միհատ <a link="form">form</a>'
  //   }
  // ]
};

export const SELECT_ACTION = {
  requiredData: [
    {
      input: 'key',
      type: 'string',
      description: 'Select action key.',
    },
    {
      input: 'title',
      type: 'string',
      description: 'Select action title.',
    },
  ],
};

// Outputs
