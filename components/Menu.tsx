"use client"
import Image from "next/image"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import slider_left from "../public/images/slider-left-leaf.png";
import slider_right from "../public/images/slider-right-leaf.png";
import {allCocktails} from "@/constants";
import {useState} from "react";
import rightArrow from "../public/images/right-arrow.png";
import leftArrow from "../public/images/left-arrow.png";

const Menu = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	
	useGSAP(() => {
		gsap.fromTo("#title", {opacity: 0},
			{opacity: 1, duration: 1})
		gsap.fromTo(".cocktail img", {opacity: 0, xPercent: -100}, {xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut"})
		gsap.fromTo(".cocktail h2", {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: "power1.inOut"})
		gsap.fromTo(".details p", {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: "power1.inOut"})
	}, [currentIndex]);
	
	const currentRef = useRef<HTMLDivElement>(null)
	const totalCocktails = allCocktails.length
	const gotoSlide = (index: number) => {
		const newIndex = (index + totalCocktails) % totalCocktails
		setCurrentIndex(newIndex);
	}
	const getCocktailAt = (indexOffset: number) => {
		return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
	}
	const currentCocktail = getCocktailAt(0)
	const previousCocktail = getCocktailAt(-1)
	const nextCocktail = getCocktailAt(1)
	
	return (
		<section
			id="menu"
			aria-labelledby={"menu-heading"}
		>
			<Image
				id="m-left-leaf"
				src={slider_left}
				alt="slider_left"
				className="left-leaf"
			/>
			<Image
				id="m-right-leaf"
				src={slider_right}
				alt="slider_right"
				className="right-leaf"
			/>
			
			<h2
				id="menu-heading"
				className="sr-only"
			>Cocktail Menu
			</h2>
			
			<nav
				className={"cocktail-tabs"}
				aria-label={"Cocktail Navigation"}
			>
				{
					allCocktails.map((cocktail, index) => {
						const isActive = index === currentIndex
						return (
							<button
								key={cocktail.name}
								className={isActive ? "text-white border-white" : "text-white/50 border-white/50"}
								onClick={() => gotoSlide(index)}
							>
								{cocktail.name}
							</button>
						)
					})
				}
			
			</nav>
			
			<div className={"content"}>
				<div className={"arrows"}>
					<button
						onClick={() => gotoSlide(currentIndex - 1)}
						className={"text-left"}
					>
						<span>{previousCocktail.name}</span>
						<Image
							src={rightArrow}
							alt="right-arrow"
							aria-hidden={true}
						/>
					</button>
					<button
						onClick={() => gotoSlide(currentIndex + 1)}
						className={"text-left"}
					>
						<span>{nextCocktail.name}</span>
						<Image
							src={leftArrow}
							alt="left-arrow"
							aria-hidden={true}
						/>
					</button>
				</div>
				<div className={"cocktail"}>
					<Image
						width={500}
						height={400}
						className={"object-contain"}
						src={currentCocktail.image}
						alt={currentCocktail.name}
					/>
				</div>
				<div className={"recipe"}>
					<div
						className={"info"}
						ref={currentRef}
					>
						<p id={"title"}>{currentCocktail.name}</p>
					</div>
					<div className={"details"}>
						<p>{currentCocktail.title}</p>
						<p>{currentCocktail.description}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Menu