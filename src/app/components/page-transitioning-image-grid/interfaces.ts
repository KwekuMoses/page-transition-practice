
export interface RefsArray {
    [key: number]: {
        wrapperRef?: HTMLElement;
        imageRef?: HTMLElement;
    };
}

export interface ImageRef {
    wrapperRef?: HTMLDivElement;
    imageRef?: HTMLImageElement;
}

export interface ImageRefs {
    [key: number]: ImageRef;
}

export interface ImagesRefsArray {
    current: {
        [key: number]: ImageRef;
    };
}

interface Image {
    src: string;
    alt: string;
    link: string;
    id: number;
    featuredImage?: boolean;
}

export interface ImageGroup {
    groupId: number;
    groupLink: string;
    images: Image[];
}