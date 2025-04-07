"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CtaV2() {
	return (
		<div className="p-2 ">
			<div className="relative w-full overflow-hidden  bg-[#54a320] py-20 rounded-3xl">
				{/* Particles background */}
				<ParticlesBackground />
				{/* <div className="absolute inset-0 z-0">
				<div className="w-full h-[600px] relative">
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
					<div
						className="w-full h-full bg-cover bg-center"
						style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
					/>
				</div>
			</div> */}

				<div className="container mx-auto px-4 text-center relative z-10">
					{/* Flexible solutions badge */}
					<div className="inline-flex items-center gap-2 bg-[rgba(60,230,130,0.1)] rounded-full px-4 py-1 mb-8">
						<div className="w-4 h-4 rounded-full bg-[#1fb30b]"></div>
						<span className="text-white text-sm">Flexible solutions</span>
					</div>

					{/* Main heading */}
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
						Everything You Need
						<br />
						And Nothing You Don&apos;t
					</h2>

					{/* Description text */}
					<p className="text-[#e0e0e0] max-w-2xl mx-auto mb-12 text-lg">
						Direct connections to the networks for money movement. Bank accounts
						that open instantly. Unopinionated building blocks that don&apos;t
						force you into legacy patterns.
					</p>

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
						<Button
							className="bg-gradient-to-r from-yellow-300/60 to-green-600 hover:from-yellow-300/60 hover:to-green-600/60
                   text-white font-medium py-5 px-8 rounded-lg shadow-md"
						>
							Get Started
						</Button>
						<Button
							className="bg-white/5 backdrop-blur-sm hover:bg-white/20 
                   text-white font-medium py-5 px-8 rounded-lg shadow-md border border-white/40"
						>
							Contact Sales
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

// Animated particles background component
function ParticlesBackground() {
	const [particles, setParticles] = useState<
		Array<{ x: number; y: number; size: number; opacity: number }>
	>([]);

	useEffect(() => {
		// Create random particles
		const newParticles = Array.from({ length: 50 }, () => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 2 + 1,
			opacity: Math.random() * 0.5 + 0.1,
		}));

		setParticles(newParticles);
	}, []);

	return (
		<div className="absolute inset-0 w-full h-full overflow-hidden">
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0a2a1e] via-[#0e3526] to-[#0a2a1e] opacity-80"></div>

			{/* Green glow in center */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#3ce682] opacity-10 blur-[100px] rounded-full"></div>

			{/* Particles */}
			{particles.map((particle, index) => (
				<div
					key={index}
					className="absolute rounded-full bg-white"
					style={{
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						opacity: particle.opacity,
					}}
				/>
			))}
		</div>
	);
}
