export type Icons = 'check' | 'arrow' | 'times' | 'search';

export interface SVGModel {
    viewBox: string;
    d: string;
}

export interface IconModel {
    check: SVGModel;
    arrow: SVGModel;
    times: SVGModel;
    search: SVGModel;
}