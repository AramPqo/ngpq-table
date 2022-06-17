export type SortDirection = 'asc' | 'desc' | '';

export class SortEvent {
    constructor(
        public column: string,
        public direction: SortDirection
    ) { }
}
