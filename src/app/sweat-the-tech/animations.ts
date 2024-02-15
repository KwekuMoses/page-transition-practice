export const glitchTitle = (tl: gsap.core.Timeline, titleRef: React.RefObject<HTMLElement>) => {

    tl.to(titleRef.current, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: 9,
        yoyo: true,
        duration: 0.0575,
    })

};