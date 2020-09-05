export interface Wwwmodel {
    pageId: number;
    imageintro: string;
    title: string;
    description?: Desc[];
    accordian_style: boolean;
    accordian?: Acc;
    previous?: null;
    tag: string;
    tag_code: string;
    next?: number;
    summery?: string;

}

export interface Project {
    pageId: number;
    mncproj: boolean;
    imageintro: string;
    title: string;
    description?: Desc[];
    accordian_style: boolean;
    accordian?: Acc;
    previous?: null;
    tag: string;
    tag_code: string;
    next?: number;
    summery?: string;

}


export interface Works {
    pageId:number;
    imageintro: string;
    title: string;
    description?: string;
    importantcolor: string;
    latest: boolean;
    pagetitle: string;
    details: string;
    previous?: number;
    next?: number;
    summery?: string;
}

export interface Desc {
    title: string;
    detail?: string;
}

export interface Acc {
    title: string;
    imagepath: string;
    alter?: string;
}
export interface Sliders {
    images: string;
    details: string;
}

export function sortByLateste(a: Works) {
    if (a.latest) return a.latest;
}