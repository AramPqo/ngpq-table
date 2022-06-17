import { Subject } from "rxjs";

export class LoaderService {
  public loadData$ = new Subject();

  show() {
    this.loadData$.next(true);
  }

  hide() {
    this.loadData$.next(false);
  }
}
