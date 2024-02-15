import { RefsArray, ImagesRefsArray } from './interfaces';

export const assignRef = (index: number, element: HTMLElement | null, type: 'wrapperRef' | 'imageRef', imagesRefsArray: React.MutableRefObject<RefsArray>): void => {

    /* Check if imagesRefsArray and imagesRefsArray.current are defined */
    if (!imagesRefsArray || !imagesRefsArray.current) {
        console.error("Invalid imagesRefsArray reference provided.");
        return;
    }

    /* Validate the 'index' to ensure it's a non-negative number */
    if (typeof index !== 'number' || index < 0) {
        console.error("Invalid index. Index must be a non-negative number.");
        return;
    }

    /* Ensure the array at this index is initialized */
    if (!imagesRefsArray.current[index]) {
        imagesRefsArray.current[index] = {};
    }

    /* Assign the ref based on type */
    imagesRefsArray.current[index][type] = element;

};

export const assignAnimationTargets = (imagesRefsArray: ImagesRefsArray) => {

    const leftImageWrapperRef = imagesRefsArray.current[0]?.wrapperRef;
    const leftImageRef = imagesRefsArray.current[0]?.imageRef;

    const centerImageWrapperRef = imagesRefsArray.current[1]?.wrapperRef;
    const centerImageRef = imagesRefsArray.current[1]?.imageRef;

    const rightImageWrapperRef = imagesRefsArray.current[2]?.wrapperRef;
    const rightImageRef = imagesRefsArray.current[2]?.imageRef;

    return { leftImageWrapperRef, leftImageRef, centerImageWrapperRef, centerImageRef, rightImageWrapperRef, rightImageRef };

}
