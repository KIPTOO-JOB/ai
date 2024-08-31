"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
	Menubar,
	MenubarContent,
	MenubarMenu,
	MenubarSubTrigger,
} from "@/components/ui/menubar";
import { MenubarArrow, MenubarTrigger } from "@radix-ui/react-menubar";

function NavLinks() {
	const [isopen, setIsOpen] = useState(true);

	return (
		<div className=" ">
			<div className=" space-x-8  font-medium   w-fit p-4  items-center rounded-md shadow-sm lg:text-xl dark:text-gray-950 ">
				<Link href="./aiAgent">Ai Agents</Link>
				<Link href="./Contacts">Contact</Link>
				<Link href="./Cart">Cart</Link>
			</div>
			{/* Mobile */}
		</div>
	);
}

export default NavLinks;
