import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import NavLinks from "./NavLinks";

const NavBar = () => {
	// const { setTheme } = useTheme();
	return (
		<nav className="dark:shadow-md   mt-5 rounded-md p-2  dark:drop-shadow-md    fixed top-0  w-full  dark:bg-gradient-to-b from-neutral-200 to bg-gray-50 ">
			<div className="dark:text-black justify-between flex flex-row items-center p-3 mt-3">
				<Link href="/">
					<h1 className="font-sohne  font-bold text-2xl ">
						AI Automation Agency
					</h1>
				</Link>

				<div>
					<NavLinks />
				</div>
				<div className=" dark:text-white">
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
