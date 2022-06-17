import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Settings } from 'projects/ngpq-table/src/public-api';
import { TableSettings } from './settings';
import { map } from 'rxjs/operators';
import { Comments } from '../../models/comments.model';
import { cloneDeep } from 'projects/ngpq-table/src/lib/helpers/table.util';

interface TableData {
  data$: Observable<Comments[]>;
  settings: { [key: string]: Settings };
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private injector: Injector) {}

  getAllData(): TableData {
    const isLocal = !(location.href.search('arampqo.github.io') !== -1);

    const settings = TableSettings;
    let data$: Observable<Comments[]>;

    if (isLocal) {
      data$ = this.setAdditionalTemplate(
        this.http.get<Comments[]>('/assets/db/comments.json'),
      );
    } else {
      data$ = this.setAdditionalTemplate(of(cloneDeep(this.injector.get('comments'))));
    }

    return { data$, settings };
  }

  private getStatusTpl(status: string) {
    switch (status.toLowerCase()) {
      case 'low':
        return `<i class="fa fa-frown-o"></i>`;
      case `medium`:
        return `<i class="fa fa-meh-o"></i>`;
      default:
        return `<i class="fa fa-smile-o"></i>`;
    }
  }

  private setAdditionalTemplate(data: Observable<Comments[]>) {
    return data.pipe(
      map((data: Comments[]) =>
        data.map(comment => {
          const isCompleted = Math.round(Math.random());
          const postId = Math.floor(Math.random() * 4) + 1;

          comment.completed = {
            value: !!isCompleted,
            template: !!isCompleted
              ? '<i class="fa fa-check"></i>'
              : '<i class="fa fa-times"></i>',
          };

          comment.status = {
            value: comment.status,
            template: this.getStatusTpl(comment.status as string),
          };

          comment.postId = postId;
          return comment;
        }),
      ),
    );
  }
}
