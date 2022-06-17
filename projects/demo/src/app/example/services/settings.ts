import { EmailComponent } from "../custom-email/custom-email.component";
import { Validators } from "@angular/forms";
import { Settings } from 'projects/ngpq-table/src/public-api';

export const TableSettings: { [key: string]: Settings; } = {
  id: {
    title: 'ID',
    width: '5%',
    className: 'id-content',
    form: {
      disabled: true
    }
  },
  postId: {
    title: 'Post ID',
    width: '5%',
    className: 'post-id-content',
    form: {
      type: 'select',
      control: [[1, 2, 3, 4]],
      placeholder: 'Check Post ID'
    }
  },
  name: {
    title: 'Name',
    width: '20%',
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
    width: '10%',
    disableFilter: true,
    className: 'status-content',
    form: {
      control: [['High', 'Medium', 'Low']],
      type: 'radio'
    }
  },
  completed: {
    title: 'Completed',
    width: '10%',
    disableFilter: true,
    className: 'completed-content',
    form: {
      control: [null],
      type: 'checkbox'
    }
  }
};
