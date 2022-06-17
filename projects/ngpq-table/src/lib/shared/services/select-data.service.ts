import { Subject } from "rxjs";

export class SelectDataService {
    public selectAllData$: Subject<boolean> = new Subject();
}
