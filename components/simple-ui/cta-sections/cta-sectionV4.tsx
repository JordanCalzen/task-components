"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";

interface AnimatedGradientBackgroundProps {
	className?: string;
	children?: React.ReactNode;
	intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
	x: number;
	y: number;
	width: number;
	length: number;
	angle: number;
	speed: number;
	opacity: number;
	hue: number;
	pulse: number;
	pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
	const angle = -35 + Math.random() * 10;
	return {
		x: Math.random() * width * 1.5 - width * 0.25,
		y: Math.random() * height * 1.5 - height * 0.25,
		width: 30 + Math.random() * 60,
		length: height * 2.5,
		angle: angle,
		speed: 0.6 + Math.random() * 1.2,
		opacity: 0.12 + Math.random() * 0.16,
		hue: 190 + Math.random() * 70,
		pulse: Math.random() * Math.PI * 2,
		pulseSpeed: 0.02 + Math.random() * 0.03,
	};
}

export default function CtaV4({
	className,
	intensity = "strong",
}: AnimatedGradientBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const beamsRef = useRef<Beam[]>([]);
	const animationFrameRef = useRef<number>(0);
	const MINIMUM_BEAMS = 20;

	const opacityMap = {
		subtle: 0.7,
		medium: 0.85,
		strong: 1,
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const updateCanvasSize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.scale(dpr, dpr);

			const totalBeams = MINIMUM_BEAMS * 1.5;
			beamsRef.current = Array.from({ length: totalBeams }, () =>
				createBeam(canvas.width, canvas.height)
			);
		};

		updateCanvasSize();
		window.addEventListener("resize", updateCanvasSize);

		function resetBeam(beam: Beam, index: number, totalBeams: number) {
			if (!canvas) return beam;

			const column = index % 3;
			const spacing = canvas.width / 3;

			beam.y = canvas.height + 100;
			beam.x =
				column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
			beam.width = 100 + Math.random() * 100;
			beam.speed = 0.5 + Math.random() * 0.4;
			beam.hue = 190 + (index * 70) / totalBeams;
			beam.opacity = 0.2 + Math.random() * 0.1;
			return beam;
		}

		function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
			ctx.save();
			ctx.translate(beam.x, beam.y);
			ctx.rotate((beam.angle * Math.PI) / 180);

			// Calculate pulsing opacity
			const pulsingOpacity =
				beam.opacity *
				(0.8 + Math.sin(beam.pulse) * 0.2) *
				opacityMap[intensity];

			const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

			// Enhanced gradient with multiple color stops
			gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
			gradient.addColorStop(
				0.1,
				`hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
			);
			gradient.addColorStop(
				0.4,
				`hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
			);
			gradient.addColorStop(
				0.6,
				`hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity})`
			);
			gradient.addColorStop(
				0.9,
				`hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`
			);
			gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

			ctx.fillStyle = gradient;
			ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
			ctx.restore();
		}

		function animate() {
			if (!canvas || !ctx) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.filter = "blur(35px)";

			const totalBeams = beamsRef.current.length;
			beamsRef.current.forEach((beam, index) => {
				beam.y -= beam.speed;
				beam.pulse += beam.pulseSpeed;

				// Reset beam when it goes off screen
				if (beam.y + beam.length < -100) {
					resetBeam(beam, index, totalBeams);
				}

				drawBeam(ctx, beam);
			});

			animationFrameRef.current = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener("resize", updateCanvasSize);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [intensity]);

	return (
		<div
			className={cn(
				"relative h-screen-[70vh] w-full overflow-hidden bg-neutral-950"
			)}
		>
			<canvas
				ref={canvasRef}
				className="absolute inset-0"
				style={{ filter: "blur(15px)" }}
			/>

			<motion.div
				className="absolute inset-0 bg-neutral-950/5"
				animate={{
					opacity: [0.05, 0.15, 0.05],
				}}
				transition={{
					duration: 10,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
				}}
				style={{
					backdropFilter: "blur(50px)",
				}}
			/>

			<div className="relative z-10 flex h-screen w-full items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					{/* Left Section - Main CTA */}
					<div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
						<motion.div
							className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
								<span className="text-white">
									Transform your business with{" "}
								</span>
								<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
									cutting-edge solutions
								</span>
							</h2>
						</motion.div>
						<motion.div
							className="text-lg md:text-2xl lg:text-3xl text-white/70 tracking-tighter"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<p className="text-lg text-gray-300 max-w-lg">
								Get the best in class{" "}
								<span className="text-blue-400 font-medium">support</span> for
								the most advanced{" "}
								<span className="text-purple-500 font-medium">products</span> in
								the industry.
							</p>
						</motion.div>
						<motion.div
							className="text-lg md:text-2xl lg:text-3xl text-white/70 tracking-tighter"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="flex flex-wrap gap-4">
								<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30">
									Buy now <ArrowRight className="w-5 h-5" />
								</button>
								<button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 border border-gray-700 transition-all shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30">
									Talk to us <MessageSquare className="w-5 h-5" />
								</button>
							</div>
						</motion.div>
					</div>

					{/* Right Section - Testimonial */}
					<div className="relative">
						<div className="">
							<Image
								src="https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								alt=""
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
