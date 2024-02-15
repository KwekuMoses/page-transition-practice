import { gsap } from 'gsap';

export const slideElementUp = (className: string): void => {
    const tl = gsap.timeline();

    const selector = `.${className}`;

    tl.fromTo(selector, {
        top: 100,
        ease: "power1.out",
        duration: 1.5,
    }, {
        top: 0,
        stagger: .05,
    });
};

export const slideLogoUp = (className: string): void => {
    const tl = gsap.timeline();

    const selector = `.${className}`;

    gsap.set(selector, { letterSpacing: 0 })

    tl.fromTo(selector, {
        top: 100,
        ease: "power1.out",
        duration: 1.5,
        color: "white",

    }, {
        top: 0,
        color: "ivory",
    })
};
