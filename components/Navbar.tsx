import {navLinks} from "@/constants";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";




const Navbar = () => {

	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: "nav",
				start: "bottom top",
			},
		});
		navTween.fromTo('nav', {backgroundColor: "transparent"}, {
			backgroundColor: "#00000050",
			backdropFilter: "blur(10px)",
			duration: 1,
			ease: "power1.inOut",
		});
	}, []);
	
	
	return (
		<nav>
			<div>
				<a
					href="#home"
					className="flex items-center gap-2"
				>
					<Image
						src="/images/logo.png"
						alt="logo"
						width={40}
						height={40}
					/>
					<p>Cocktail</p>
				</a>
				
				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a
								className={"cursor-pointer text-nowrap md:text-base text-sm"}
								href={`${link.id}`}
							>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;