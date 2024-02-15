import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Page Transition Image Grid Demo",
	description: "Created by Kweku Moses",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
