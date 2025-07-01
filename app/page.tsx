"use client"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
import {useRef} from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
	gsap.registerPlugin(ScrollTrigger, SplitText);
	const scrollReff = useRef<HTMLDivElement>(null)
	
	useGSAP(() => {
		if (!scrollReff.current) return;
		
		const boxes = gsap.utils.toArray<HTMLElement>(scrollReff.current.children);
		
		boxes.forEach((box) => {
			gsap.to(box, {
				x: 150,
				duration: 1,
				borderRadius: "50%",
				rotation: 360,
				scale: 1.5,
			});
		});
		
		
	}, []);
	
	return (
		<main>
			<Navbar />
			<Hero />
			<Cocktails />
			<About />
			<Art/>
			<Menu />
			<Footer/>
		</main>
	);
}
