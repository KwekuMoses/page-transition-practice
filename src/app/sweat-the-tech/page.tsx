"use client";
// External Libraries
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";

// Styles
import styles from "./page.module.scss";

// Animations
import { glitchTitle } from "./animations";

// Fonts
import { titleFont } from "./fonts";

const SweatTheTech = () => {
	const titleRef = useRef(null);

	useGSAP(() => {

		if (titleRef.current) {
			const tl: gsap.core.Timeline = gsap.timeline({
				paused: false,
			});
			glitchTitle(tl, titleRef);
		}

	});

	return (
		<div className={styles.sweatTheTech}>
			<div className={styles.sweatTheTech__imageWrapper}>
				<Image
					fill={true}
					style={{ objectFit: "cover" }}
					src="/images/box.jpg"
					alt="nike-shoe"
					priority={true}
					className={styles.sweatTheTech__image}
				/>
				<div className={classNames(styles.sweatTheTech__titleWrapper, titleFont)}>
					<h1 className={styles.sweatTheTech__title} ref={titleRef}>
						sweat the technique.
					</h1>
				</div>
			</div>
			{/* Additional content */}
			<div className={styles.sweatTheTech__content}>
				<p>Additional Content</p>
			</div>
		</div >
	);
};

export default SweatTheTech;
