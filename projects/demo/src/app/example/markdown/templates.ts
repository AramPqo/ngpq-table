export const BASIC_DATA = `
      settings: { [key: string]: Settings; } = {
        id: {
          title: 'ID',
          width: '10%',
          className: 'id-content',
          form: {
            disabled: true
          }
        },
        postId: {
          title: 'Post ID',
          width: '10%',
          className: 'post-id-content',
          form: {
            type: 'select',
            control: [[1, 2, 3, 4]],
            placeholder: 'Check Post ID'
          }
        },
        name: {
          title: 'Name',
          width: '15%',
          className: 'name-content',
          form: {
            control: ['James', [Validators.required]],
            errorMessage: 'This field is required',
            placeholder: 'Name...'
          }
        },
        email: {
          title: 'Email',
          width: '20%',
          className: 'email-content',
          renderComponent: EmailComponent,
          form: {
            control: [null, [Validators.required, Validators.email]],
            errorMessage: 'Incorrect E-Mail Address',
            placeholder: 'Email...'
          }
        },
        description: {
          title: 'Description',
          width: '30%',
          className: 'description-content',
          disableSort: true,
          form: {
            control: [null],
            type: 'textarea',
            placeholder: 'Body...'
          }
        },
        status: {
          title: 'Status',
          width: '15%',
          disableFilter: true,
          className: 'status-content',
          form: {
            control: [['High', 'Medium', 'Low']],
            type: 'radio'
          }
        },
        completed: {
          title: 'Completed',
          width: '15%',
          disableFilter: true,
          className: 'completed-content',
          form: {
            control: [null],
            type: 'checkbox'
          }
        }
      };
            
      data = [
        {
          "id": 1,
          "name": "id labore ex et quam laborum",
          "email": "Eliseo@gardner.biz",
          "description": "laudantium enim quasi est...",
          "completed": {
            template: '<i class="fa fa-check"></i>',
            value: true
          }
        }
        ...
      ];
`;

export const DETAILS_TEMPLATE = ` 
<ng-template let-comment="row" #commentDetails>
      <ul>
        <li>
            ID: {{comment.id}}
        </li>
        <li>
            Post ID: {{comment.postId}}
        </li>
        <li>
            Name: {{comment.name}}
        </li>
        <li>
            Email: {{comment.email}}
        </li>
        <li>
            Body: {{comment.description}}
        </li>
        <li>
            Completed: {{comment.status.value}} DZEL!
        </li>
        <li>
            Completed: <span [innerHTML]="comment.completed.template"></span>
        </li>
      </ul>
</ng-template>`;
