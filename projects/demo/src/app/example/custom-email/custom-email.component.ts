import { Component, Input } from '@angular/core';
import { ViewData } from 'projects/ngpq-table/src/lib/models/custom-view.model';

@Component({
  template: `
    <div class="email-content">
      <div class="icon">
        <i class="fa fa-envelope-o"></i> 
      </div>
      <div class="email"> {{value}} </div>
    </div>
  `,
  styles: [
    `
     .email-content {
       display: flex;
       align-items: center;
       width: 100%;
       overflow: hidden;
       color: #555;
       background-color: #f6fafd;
       border: 1px solid #cccccc;
     }
     .icon {
       padding: 5px;
       font-size: 14px;
       color: #555;
       text-align: center;
       border-right: 1px solid #ccc;
     }
     .email {
       padding-left: 15px;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
     }
    `
  ]
})
export class EmailComponent implements ViewData {
  @Input() value: any;
  @Input() rowData: any;
}