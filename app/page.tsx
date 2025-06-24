"use client"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
import {useRef} from "react";

export default function Home() {
	gsap.registerPlugin(ScrollTrigger, SplitText);
	const scrollReff = useRef<HTMLDivElement>(null)
	
	useGSAP(() => {
		if (!scrollReff.current) return;
		
		const boxes = gsap.utils.toArray<HTMLElement>(scrollReff.current.children);
		
		boxes.forEach((box) => {
			// Ваша анимация для каждого элемента
			gsap.to(box, {
				x: 150, // пример анимации
				duration: 1,
				borderRadius: "50%",
				rotation: 360,
				scale: 1.5,
			});
		});
	}, []);
	return (
		
		<main className={"flex-center box"}>
			<h1 className={"text-3xl text-indigo-500"}>Serega Super Coder</h1>
		</main>
	);
}
