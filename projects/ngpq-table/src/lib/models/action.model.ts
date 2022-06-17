export class Action {
    constructor(
        public template: string,
        public key?: string,
        public className?: string,
        public isCreate?: boolean,
        public isUpdate?: boolean
    ) { }
}
