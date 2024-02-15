import { Bowlby_One_SC, Rubik_Beastly } from "next/font/google";

export const bowlby_one_sc = Bowlby_One_SC({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

export const rubik_beastly = Rubik_Beastly({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400"],
})
export const linkFont = bowlby_one_sc.className
export const logoFont = rubik_beastly.className
