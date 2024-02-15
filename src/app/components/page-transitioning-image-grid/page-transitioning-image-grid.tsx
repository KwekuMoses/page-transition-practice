"use client"
/* External Libraries */
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';

/* Styles */
import styles from './page-transitioning-image-grid.module.scss';

/* TypeScript Interfaces */
import { ImageRefs, ImageGroup } from './interfaces';

/* Animation Utilities */
import { scaleImageGrid, scaleWrapper, slideElementLeft, slideElementRight, expandElementFullscreen, slideElementDown, slideElementUp } from './animations';

/* Utility Functions */
import { assignRef, assignAnimationTargets } from './utils';

/* Fonts */
import { titleFont } from './fonts';

/**
 * This component is designed to take a dynamic number of images from an API 
 * Each added image will be included in imagesRefsArray and assigned a ref
 * Additional classes from images can be added dynamically via api & the imageClasses variable,
 * the same thing can be done if needed for the image wrappers
 */
const ImageGrid: React.FC<ImageGroup> = ({ images, groupId, groupLink }) => {

    /**
      * The 'timeline' ref in this component is used to control a sequence of animations with GSAP. 
      * It's essentially a container that allows you to queue multiple animations to occur one after another or at specific times, 
      * making it easier to create complex animations. This timeline is created with 'gsap.timeline()' and initially set to 'paused' 
      * so it doesn't play immediately. Animations such as scaling, sliding, and expanding elements are added to this timeline.
      * When an image is clicked, the 'handleImageClick' function checks if the timeline exists and plays it from the start or current paused position.
      * The timeline is also configured to navigate to a new page upon completion using 'router.push()'. This approach provides a smooth, 
      * animated transition between components or pages in a Next.js application.
     **/
    const timeline = useRef<gsap.core.Timeline>(gsap.timeline({
        paused: true,
    }));

    /* Create an array of refs for storing dynamic number of images and their corresponding wrappers */
    const imagesRefsArray = useRef<ImageRefs>({});


    const imageGridRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);


    /* The Click event */
    /* Extract the contextSafe function from the useGSAP hook to handle the click event */
    const { contextSafe } = useGSAP();

    /* Click handler to play the timeline */
    const handleImageClick = contextSafe((link: string) => {
        if (timeline.current) {
            timeline.current.eventCallback("onComplete", () => router.push(`/${link}`));
            timeline.current.play();
        }
    });

    /**
     * GSAP hook to initialize and manage GSAP animations within React components.
     * This hook sets up animations on mount and ensures they are properly cleaned up on unmount.
     */
    const router = useRouter();

    useGSAP(() => {

        slideElementUp(titleRef.current)

        /* Pause the timeline to prevent it from playing on mount */
        timeline.current.pause();

        const {
            leftImageWrapperRef, leftImageRef,
            centerImageWrapperRef, centerImageRef,
            rightImageWrapperRef, rightImageRef
        } = assignAnimationTargets(imagesRefsArray);

        /* Clear existing animations to reset the timeline */
        timeline.current.clear();

        timeline.current
            .add(scaleImageGrid(imageGridRef))
            .add(scaleWrapper(wrapperRef), '<')
            .add(slideElementLeft(leftImageWrapperRef, leftImageRef), '<')
            .add(slideElementRight(rightImageWrapperRef, rightImageRef), '<')
            .add(expandElementFullscreen(centerImageWrapperRef, centerImageRef), '<')
            .add(slideElementDown(titleRef), '<');

    }, []);

    return (
        <div className={styles.imageGrid} ref={imageGridRef} >
            <div className={styles.imageGrid__wrapper} ref={wrapperRef}>
                <div className={styles.imageGrid__titleWrapper}>
                    <h1 ref={titleRef} className={`${styles.imageGrid__title} ${titleFont}`}>
                        sweat the technique.
                    </h1>
                </div>
                {images.map((image, index) => {
                    const { id, src, alt, link } = image;
                    /* The 'classNames' package is used to conditionally apply classes to the images based on the API, e.g. the 'featuredImage' property */
                    const imageWrapperClasses = classNames({
                        [styles.imageGrid__imageWrapper]: true,
                        [styles.imageGrid__featuredImage]: image.featuredImage ? true : false,
                    });

                    return (
                        <div
                            className={imageWrapperClasses}
                            ref={el => assignRef(index, el, 'wrapperRef', imagesRefsArray)}
                            key={id}
                            onClick={() => handleImageClick(link)}
                        >
                            <Image
                                fill={true}
                                sizes="100% 100%"
                                style={{ objectFit: "cover" }}
                                src={src}
                                alt={alt}
                                aria-label={alt}
                                ref={el => assignRef(index, el, 'imageRef', imagesRefsArray)}
                                priority={true}
                            />
                        </div>
                    )
                })}
            </div >
        </div >
    )
}

export default ImageGrid