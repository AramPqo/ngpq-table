import { Validators } from "@angular/forms";

type INPUT_TYPE =
    'select'
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'textarea'
    | 'checkbox'
    | 'radio'
    | 'range'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'week'
    | 'month'
    | 'color'
    | 'reset'
    | 'tel'
    | 'url';

class SettingsForm {
    constructor(
        public control?: Array<any | Array<Validators>>,
        public type?: INPUT_TYPE | string,
        public disabled?: boolean,
        public placeholder?: string,
        public errorMessage?: any
    ) { }
}

export class Settings {
    constructor(
        public title: string,
        public width?: string,
        public className?: string,
        public disableSort?: boolean,
        public disableFilter?: boolean,
        public renderComponent?: any,
        public form?: SettingsForm
    ) { }
}
