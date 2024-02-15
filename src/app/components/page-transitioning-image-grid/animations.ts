import gsap from 'gsap';

export const scaleImageGrid = (imageGridRef: React.RefObject<HTMLElement>) => {

    let tl = gsap.timeline();

    tl.to(imageGridRef.current, {
        height: "100vh",
        width: "100vw",
        duration: 2,
        ease: "expo.inOut",
    });

    return tl;

};

export const scaleWrapper = (wrapperRef: React.RefObject<HTMLElement>) => {

    let tl = gsap.timeline();

    tl.to(wrapperRef.current, {
        height: "100vh",
        width: "100vw",
        transformOrigin: "center center",
        scale: 1,
        duration: 2,
        ease: "expo.inOut",
        overflow: "hidden",
    }, "<");

    return tl;

};

export const slideElementLeft = (elementWrapperRef: HTMLElement, elementRef: HTMLElement) => {

    let tl = gsap.timeline();

    tl.to(elementWrapperRef, {
        x: -110,
        zIndex: 0,
        duration: 1.4,
        y: -100,
        height: "+=100px",
        ease: "back",
        filter: "grayScale(0)",
        rotationZ: 2,

    }, "<")
        .to(elementRef, {
            scale: 1.5,
            rotationY: -2,
            rotationZ: 3,

        }, "<");

    return tl;

};

export const slideElementRight = (elementWrapperRef: HTMLElement, elementRef: HTMLElement) => {

    let tl = gsap.timeline();

    tl.to(elementWrapperRef, {
        x: 50,
        zIndex: 0,
        duration: 0.9,
        y: 100,
        height: "+=150px",
        ease: "back.inOut",
        filter: "grayScale(0)",
        rotationY: 2,
        rotationZ: -3,

    }, "<")
        .to(elementRef, {
            scale: 1.3,
            duration: 1,
        }, "<");

    return tl;

};

export const expandElementFullscreen = (elementWrapperRef: HTMLElement, elementRef: HTMLElement) => {

    let tl = gsap.timeline();

    tl.to(elementWrapperRef, {
        zIndex: 110,
        width: "100vw",
        height: "100vh",
        ease: "elastic.inOut(1, 0.9)",
        duration: 2,
    })
        .to(elementWrapperRef, {
            filter: "grayscale(0)",
            ease: "expo.inOut",
            duration: 1.5,
            scale: 1,
        }, "<")
        .to(elementRef, {
            autoAlpha: 1,
            height: "100%",
            duration: 0.5,
            ease: "sine",
        }, "<");

    return tl;

}

export const slideElementDown = (titleRef: React.RefObject<HTMLElement>) => {

    if (titleRef.current) {
        return gsap.fromTo(titleRef.current, {
            opacity: 1,
            y: 0,
        }, {
            opacity: 1,
            y: 120,
            duration: 2,
            ease: "expo.inOut",
        });
    }

}

export const slideElementUp = (selector: HTMLElement): void => {

    const tl = gsap.timeline();

    tl.fromTo(selector, {
        top: 100,
        ease: "power1.out",
    }, {
        top: 0,
        duration: 1,
    });

};
