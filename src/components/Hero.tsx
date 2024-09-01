import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowBigDown, ArrowDown } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function Hero() {
	return (
		<main className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center flex-col ">
			{/* Radial gradient for the container to give a faded look */}
			{/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
			<h1 className="text-4xl sm:text-7xl font-bold   font-sohne  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
				AI Automation Agency
			</h1>
			<div className=" text-wrap text-center-center m-8  ">
				<h1 className=" leading-7 font-sohne font-bold text-xl">
					We provide cutting-edge AI solutions to revolutionize your business
					and enhance efficiency.
				</h1>
			</div>
			<div className="m-8 pt-9 items-center flex justify-center   ">
				<Link href="./aiAgent">
					<Button className=" p-10 rounded-2xl gap-5 text-white dark:text-black   font-light  w-fit text-lg flex-row ">
						EXPLORE OUR AI AGENTS
						<span className=" animate-bounce backdrop:blur-sm bg-black/15 p-2 rounded-full">
							<ArrowRightIcon />{" "}
						</span>
					</Button>
				</Link>
			</div>
		</main>
	);
}

export default Hero;
