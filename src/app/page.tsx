import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<nav>
				<NavBar />
			</nav>
			<section>
				<Hero />
			</section>
		</main>
	);
}
