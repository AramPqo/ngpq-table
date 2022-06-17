import { Settings } from './settings.model';

export interface TableHeader extends Settings {
    key: string;
    isStatic?: boolean;
}
