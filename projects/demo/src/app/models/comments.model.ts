import { DataTemplate } from "projects/ngpq-table/src/lib/models/data-template.model";

export class Comments {
    constructor(
        public id: number,
        public postId: number,
        public name: string,
        public email: string,
        public description: string,
        public status: string | DataTemplate,
        public completed: boolean | DataTemplate
    ) { }
}