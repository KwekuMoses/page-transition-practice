"use client";
/* External Libraries */
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import classNames from 'classnames';

/* Internal Utilities/Functions */
import { slideElementUp, slideLogoUp } from "./animations";

/* Components */
import MobileMenu from "./mobile-menu/mobile-menu";

/* Data */
import { linksData } from "./api";

/* Styles */
import { linkFont, logoFont } from './fonts';
import styles from "./header.module.scss";

export default function Header() {
	/** 
	 * Classes used for animations & styling 
	 * These classes are designed for use in both GSAP animations and styling.
	 * */
	const linkClass = styles.header__link
	const logoClass = styles.header__logo

	/* Classes for elements with multiple classes */
	const headerClassNames = classNames(styles.header, logoFont);
	const linkClassNames = classNames(linkClass, linkFont);

	/**
	 * GSAP hook to initialize and manage GSAP animations within React components.
	 * This hook sets up animations on mount and ensures they are properly cleaned up on unmount.
	 */
	useGSAP(() => {
		slideElementUp(linkClass);
		slideLogoUp(logoClass);
	}, []);

	return (
		<div className={headerClassNames}>
			<span className={styles.header__logoContainer}>
				<Link href="/">
					<p className={logoClass}>The Blog</p>
				</Link>
			</span>
			<div className={styles.header__linksContainer}>
				{
					linksData?.map((linkData) => {
						const { name, path, id } = linkData;
						return (
							<span className={styles.header__linkContainer} key={id}>
								<Link
									className={linkClassNames}
									href={path}
									aria-label={name}
								>
									{name}
								</Link>
							</span>
						)
					})
				}
			</div>
			<div className={styles.header__mobileMenuContainer}>
				<MobileMenu />
			</div>
		</div>
	);
}
