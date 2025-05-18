import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ name: "HOME", href: "#hero" },
	{ name: "ABOUT ME", href: "#about" },
	{ name: "SKILLS", href: "#skills" },
	{ name: "PROJECTS", href: "#projects" },
	{ name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<nav
			className={cn(
				"fixed w-full z-50 transition-all duration-300",
				isScrolled ? "py-3 bg-border backdrop-blur-md shadow-xs" : "py-5"
			)}
		>
			<div className="container flex items-center justify-between">
				<a
					className="text-xl font-bold text-primary flex items-center"
					href="#hero"
				>
					<span className="relative z-10">shreya reddi ☻</span>
				</a>

				{/* desktop nav */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-border transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>

			{/* mobile nav button and overlay */}

			<button
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className="fixed top-2 right-4 md:hidden p-2 text-foreground z-60"
				aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				style={{ pointerEvents: "auto" }}
			>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			<div
				className={cn(
					"fixed top-0 left-0 w-screen h-screen bg-border/90 backdrop-blur-md z-50 flex flex-col items-center justify-center",
					"transition-all duration-300 md:hidden",
					isMenuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				)}
			>
				<div className="flex flex-col space-y-8 text-xl">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-border transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};