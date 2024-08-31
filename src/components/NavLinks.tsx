import Link from "next/link";
import React from "react";
import { Menubar } from "@/components/ui/menubar";

function NavLinks() {
	return (
		<Menubar className="dark:text-white ">
			<div className=" space-x-8  font-medium   w-fit p-4  items-center rounded-md shadow-sm  ">
				<Link href="./aiAgent">Ai Agents</Link>
				<Link href="./Contacts">Contact</Link>
				<Link href="./Cart">Cart</Link>
			</div>
		</Menubar>
	);
}

export default NavLinks;
