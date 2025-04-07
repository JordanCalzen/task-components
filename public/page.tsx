"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Info, Star } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample product data
const products = [
	{
		id: 1,
		name: "Minimalist Desk Lamp",
		description:
			"A sleek, adjustable desk lamp with warm lighting for your workspace.",
		price: 49.99,
		rating: 4.5,
		reviews: 128,
		image:
			"/laptop-device-with-minimalist-monochrome-background_23-2150763336.avif",
		category: "Home Office",
		inStock: true,
		discount: 0,
		isNew: false,
		isBestseller: true,
	},
	{
		id: 2,
		name: "Ergonomic Office Chair",
		description: "Comfortable seating with lumbar support for long work hours.",
		price: 249.99,
		rating: 4.8,
		reviews: 256,
		image: "/laptop-with-blank-black-screen-white-table_53876-97915.avif",
		category: "Furniture",
		inStock: true,
		discount: 15,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 3,
		name: "Wireless Earbuds Pro",
		description: "Premium sound quality with active noise cancellation.",
		price: 129.99,
		rating: 4.7,
		reviews: 342,
		image: "/tech-device-with-nature-background_23-2150470431.avif",
		category: "Electronics",
		inStock: true,
		discount: 0,
		isNew: true,
		isBestseller: false,
	},
	{
		id: 4,
		name: "Smart Watch Series 5",
		description:
			"Track your fitness and stay connected with this premium smartwatch.",
		price: 299.99,
		rating: 4.6,
		reviews: 189,
		image: "/three-laptops-air-mockup_177821-73.avif",
		category: "Electronics",
		inStock: false,
		discount: 10,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 5,
		name: "Leather Messenger Bag",
		description: "Handcrafted genuine leather bag with multiple compartments.",
		price: 179.99,
		rating: 4.9,
		reviews: 76,
		image: "/elegant-smartphone-composition_23-2149437112.avif",
		category: "Accessories",
		inStock: true,
		discount: 0,
		isNew: false,
		isBestseller: true,
	},
	{
		id: 6,
		name: "Ceramic Coffee Mug Set",
		description: "Set of 4 handmade ceramic mugs in assorted colors.",
		price: 39.99,
		rating: 4.3,
		reviews: 112,
		image: "/elegant-smartphone-composition_23-2149437105.avif",
		category: "Kitchen",
		inStock: true,
		discount: 0,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 7,
		name: "Portable Bluetooth Speaker",
		description: "Waterproof speaker with 20-hour battery life and rich sound.",
		price: 89.99,
		rating: 4.4,
		reviews: 203,
		image: "/still-life-books-versus-technology_23-2150062920.avif",
		category: "Electronics",
		inStock: true,
		discount: 20,
		isNew: false,
		isBestseller: false,
	},
	{
		id: 8,
		name: "Minimalist Wall Clock",
		description: "Silent quartz movement with a clean, modern design.",
		price: 59.99,
		rating: 4.2,
		reviews: 87,
		image:
			"/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074296.avif",
		category: "Home Decor",
		inStock: true,
		discount: 0,
		isNew: true,
		isBestseller: false,
	},
];

export default function ProductListingShowcase() {
	const [currentDesign, setCurrentDesign] = useState("minimalist");
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
		if (!darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8 flex flex-col gap-4">
					<h1 className="text-3xl font-bold">
						E-commerce Product Listing Designs
					</h1>
					<p className="text-muted-foreground">
						Browse through different design styles for e-commerce product
						listings.
					</p>
					<div className="flex items-center gap-4">
						<Label htmlFor="dark-mode">Dark Mode</Label>
						<Switch
							id="dark-mode"
							checked={darkMode}
							onCheckedChange={handleDarkModeToggle}
						/>
					</div>
				</div>

				<Tabs
					value={currentDesign}
					onValueChange={setCurrentDesign}
					className="w-full"
				>
					<TabsList className="mb-8 flex w-full flex-wrap justify-start gap-2">
						<TabsTrigger value="minimalist">Minimalist & Clean</TabsTrigger>
						<TabsTrigger value="bold">Bold & Vibrant</TabsTrigger>
						<TabsTrigger value="luxury">Luxury & Elegant</TabsTrigger>
						<TabsTrigger value="tech">Tech & Modern</TabsTrigger>
						<TabsTrigger value="grid">Grid-Based & Structured</TabsTrigger>
						<TabsTrigger value="creative">Creative & Asymmetrical</TabsTrigger>
						<TabsTrigger value="mobile">Mobile-First Design</TabsTrigger>
						<TabsTrigger value="lifestyle">Lifestyle-Focused</TabsTrigger>
						<TabsTrigger value="dark">Dark Mode Aesthetic</TabsTrigger>
						<TabsTrigger value="conversion">
							High-Conversion Optimized
						</TabsTrigger>
						<TabsTrigger value="interactive">
							Interactive & Immersive
						</TabsTrigger>
					</TabsList>

					{/* Minimalist & Clean Design */}
					<TabsContent value="minimalist">
						<div className="bg-white py-8">
							<div className="container mx-auto">
								<h2 className="mb-8 text-2xl font-light tracking-tight">
									Our Products
								</h2>
								<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{products.map((product) => (
										<div key={product.id} className="group flex flex-col">
											<div className="mb-4 overflow-hidden">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
												/>
											</div>
											<h3 className="mb-1 text-base font-medium">
												{product.name}
											</h3>
											<p className="mb-2 text-sm text-muted-foreground">
												{product.category}
											</p>
											<p className="mb-4 text-base font-medium">
												${product.price.toFixed(2)}
											</p>
											<Button
												variant="outline"
												className="mt-auto rounded-none"
											>
												Add to Cart
											</Button>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Bold & Vibrant Design */}
					<TabsContent value="bold">
						<div className="bg-[#FCFCFC] py-8">
							<div className="container mx-auto">
								<h2 className="mb-8 text-3xl font-extrabold uppercase tracking-wide text-[#FF3366]">
									Featured Products
								</h2>
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{products.slice(0, 6).map((product) => (
										<div
											key={product.id}
											className="group overflow-hidden rounded-lg border-2 border-transparent bg-white p-4 shadow-lg transition-all hover:border-[#FF3366]"
										>
											<div className="relative mb-4">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[250px] w-full object-cover"
												/>
												{product.discount > 0 && (
													<div className="absolute left-0 top-0 bg-[#FF3366] px-3 py-1 text-sm font-bold text-white">
														{product.discount}% OFF
													</div>
												)}
											</div>
											<h3 className="mb-1 text-xl font-bold">{product.name}</h3>
											<div className="mb-2 flex items-center">
												<div className="flex">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`h-4 w-4 ${
																i < Math.floor(product.rating)
																	? "fill-[#FF3366] text-[#FF3366]"
																	: "fill-gray-200 text-gray-200"
															}`}
														/>
													))}
												</div>
												<span className="ml-2 text-sm text-gray-600">
													({product.reviews})
												</span>
											</div>
											<div className="mb-4 flex items-center gap-2">
												<span className="text-2xl font-bold text-[#FF3366]">
													${product.price.toFixed(2)}
												</span>
												{product.discount > 0 && (
													<span className="text-sm text-gray-500 line-through">
														$
														{(
															product.price +
															(product.price * product.discount) / 100
														).toFixed(2)}
													</span>
												)}
											</div>
											<Button className="w-full bg-[#FF3366] font-bold uppercase hover:bg-[#E62D5B]">
												Add to Cart
											</Button>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Luxury & Elegant Design */}
					<TabsContent value="luxury">
						<div className="bg-[#0F0F0F] py-12 text-white">
							<div className="container mx-auto">
								<h2 className="mb-12 text-center text-3xl font-light uppercase tracking-[0.2em] text-white">
									Curated Collection
								</h2>
								<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
									{products.slice(0, 6).map((product) => (
										<div
											key={product.id}
											className="group overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] p-6 transition-all hover:border-[#D4AF37]"
										>
											<div className="mb-6 overflow-hidden">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[280px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
												/>
											</div>
											<div className="border-t border-[#2A2A2A] pt-4">
												<h3 className="mb-2 text-xl font-light">
													{product.name}
												</h3>
												<p className="mb-4 text-sm font-light text-[#999999]">
													{product.description}
												</p>
												<div className="flex items-center justify-between">
													<span className="text-xl font-light text-[#D4AF37]">
														${product.price.toFixed(2)}
													</span>
													<Button
														variant="outline"
														className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
													>
														Add to Cart
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Tech & Modern Design */}
					<TabsContent value="tech">
						<div className="bg-[#121212] py-10 text-white">
							<div className="container mx-auto">
								<h2 className="mb-8 text-2xl font-bold text-white">
									<span className="text-[#00F0FF]">Featured</span> Products
								</h2>
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
									{products.map((product) => (
										<div
											key={product.id}
											className="group relative overflow-hidden rounded-lg bg-[#1E1E1E] p-4 transition-all hover:bg-[#252525]"
										>
											{product.isNew && (
												<div className="absolute right-4 top-4 z-10 rounded-full bg-[#00F0FF] px-2 py-1 text-xs font-bold uppercase text-black">
													New
												</div>
											)}
											<div className="mb-4 overflow-hidden rounded-lg bg-[#252525] p-4">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[200px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
												/>
											</div>
											<div className="space-y-2">
												<div className="flex items-center justify-between">
													<Badge
														variant="outline"
														className="border-[#00F0FF] text-[#00F0FF]"
													>
														{product.category}
													</Badge>
													<div className="flex items-center gap-1">
														<Star className="h-3 w-3 fill-[#00F0FF] text-[#00F0FF]" />
														<span className="text-xs">{product.rating}</span>
													</div>
												</div>
												<h3 className="text-lg font-medium">{product.name}</h3>
												<p className="text-sm text-gray-400">
													{product.description.substring(0, 60)}...
												</p>
												<div className="flex items-center justify-between pt-2">
													<span className="text-xl font-bold text-white">
														${product.price.toFixed(2)}
													</span>
													<Button
														size="sm"
														className="bg-[#00F0FF] text-black hover:bg-[#00D8E8]"
													>
														Add to Cart
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Grid-Based & Structured Design */}
					<TabsContent value="grid">
						<div className="bg-[#F8F9FA] py-8">
							<div className="container mx-auto">
								<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
									<div>
										<h2 className="text-2xl font-semibold">All Products</h2>
										<p className="text-muted-foreground">
											Showing 1-8 of 24 products
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										<Select defaultValue="featured">
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Sort by" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="featured">Featured</SelectItem>
												<SelectItem value="newest">Newest</SelectItem>
												<SelectItem value="price-low">
													Price: Low to High
												</SelectItem>
												<SelectItem value="price-high">
													Price: High to Low
												</SelectItem>
												<SelectItem value="rating">Top Rated</SelectItem>
											</SelectContent>
										</Select>
										<Select defaultValue="all">
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Category" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">All Categories</SelectItem>
												<SelectItem value="electronics">Electronics</SelectItem>
												<SelectItem value="furniture">Furniture</SelectItem>
												<SelectItem value="accessories">Accessories</SelectItem>
												<SelectItem value="kitchen">Kitchen</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
									{products.map((product) => (
										<Card key={product.id} className="overflow-hidden">
											<div className="relative">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[200px] w-full object-contain"
												/>
												{!product.inStock && (
													<div className="absolute inset-0 flex items-center justify-center bg-black/50">
														<span className="rounded bg-red-500 px-2 py-1 text-sm font-medium text-white">
															Out of Stock
														</span>
													</div>
												)}
											</div>
											<CardContent className="p-4">
												<div className="mb-2 flex items-center justify-between">
													<Badge variant="secondary">{product.category}</Badge>
													<div className="flex items-center gap-1">
														<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
														<span className="text-sm">{product.rating}</span>
													</div>
												</div>
												<h3 className="mb-1 text-lg font-medium">
													{product.name}
												</h3>
												<p className="mb-3 text-sm text-muted-foreground">
													{product.description.substring(0, 60)}...
												</p>
												<div className="flex items-center justify-between">
													<span className="text-lg font-bold">
														${product.price.toFixed(2)}
													</span>
													<Button size="sm" disabled={!product.inStock}>
														{product.inStock ? "Add to Cart" : "Sold Out"}
													</Button>
												</div>
											</CardContent>
										</Card>
									))}
								</div>

								<div className="mt-8 flex justify-center gap-2">
									<Button variant="outline" size="icon">
										<ChevronLeft className="h-4 w-4" />
									</Button>
									<Button variant="outline" size="sm">
										1
									</Button>
									<Button variant="outline" size="sm">
										2
									</Button>
									<Button variant="outline" size="sm">
										3
									</Button>
									<Button variant="outline" size="icon">
										<ChevronRight className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Creative & Asymmetrical Design */}
					<TabsContent value="creative">
						<div className="bg-[#F5F5F5] py-10">
							<div className="container mx-auto">
								<h2 className="mb-12 text-center text-3xl font-bold italic">
									Discover Our Collection
								</h2>
								<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
									{products.slice(0, 7).map((product, index) => {
										// Create asymmetrical layout
										const gridClasses = [
											"md:col-span-6 md:row-span-2", // Large feature item
											"md:col-span-6", // Regular item
											"md:col-span-4", // Small item
											"md:col-span-4", // Small item
											"md:col-span-4", // Small item
											"md:col-span-8", // Wide item
											"md:col-span-4", // Small item
										][index % 7];

										return (
											<div
												key={product.id}
												className={`group relative overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-xl ${gridClasses}`}
												style={{
													transform:
														index % 2 === 0 ? "rotate(0deg)" : "rotate(0deg)",
												}}
											>
												<div
													className={`relative mb-4 overflow-hidden ${
														index === 0 ? "h-[400px]" : "h-[200px]"
													}`}
												>
													<Image
														src={product.image || "/placeholder.svg"}
														alt={product.name}
														width={300}
														height={300}
														className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
												</div>
												<h3
													className={`mb-2 font-medium ${
														index === 0 ? "text-2xl" : "text-lg"
													}`}
												>
													{product.name}
												</h3>
												<p className="mb-3 text-sm text-gray-600">
													{product.description.substring(0, 60)}...
												</p>
												<div className="flex items-center justify-between">
													<span className="text-lg font-bold">
														${product.price.toFixed(2)}
													</span>
													<Button
														variant="outline"
														className="rounded-full border-2 border-black px-6 hover:bg-black hover:text-white"
													>
														Add to Cart
													</Button>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Mobile-First Design */}
					<TabsContent value="mobile">
						<div className="bg-white py-4">
							<div className="container mx-auto px-4">
								<div className="mb-4 flex items-center justify-between">
									<h2 className="text-xl font-semibold">Products</h2>
									<Button
										variant="ghost"
										size="sm"
										className="flex items-center gap-1"
									>
										Filter
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
										</svg>
									</Button>
								</div>

								<div className="mb-6 flex gap-2 overflow-x-auto pb-2">
									<Badge variant="outline" className="whitespace-nowrap">
										All Products
									</Badge>
									<Badge variant="secondary" className="whitespace-nowrap">
										Electronics
									</Badge>
									<Badge variant="outline" className="whitespace-nowrap">
										Furniture
									</Badge>
									<Badge variant="outline" className="whitespace-nowrap">
										Accessories
									</Badge>
									<Badge variant="outline" className="whitespace-nowrap">
										Kitchen
									</Badge>
									<Badge variant="outline" className="whitespace-nowrap">
										Home Decor
									</Badge>
								</div>

								<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
									{products.map((product) => (
										<div
											key={product.id}
											className="flex flex-col rounded-lg border bg-white shadow-sm"
										>
											<div className="relative">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[140px] w-full rounded-t-lg object-contain sm:h-[180px]"
												/>
												{product.discount > 0 && (
													<Badge className="absolute left-2 top-2 bg-red-500">
														{product.discount}% OFF
													</Badge>
												)}
												<Button
													size="icon"
													variant="secondary"
													className="absolute bottom-2 right-2 h-8 w-8 rounded-full"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M5 12h14" />
														<path d="M12 5v14" />
													</svg>
												</Button>
											</div>
											<div className="flex flex-1 flex-col p-3">
												<h3 className="mb-1 text-sm font-medium sm:text-base">
													{product.name.length > 20
														? `${product.name.substring(0, 20)}...`
														: product.name}
												</h3>
												<div className="mb-1 flex items-center gap-1">
													<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
													<span className="text-xs">{product.rating}</span>
												</div>
												<div className="mt-auto flex items-center justify-between">
													<span className="font-semibold">
														${product.price.toFixed(2)}
													</span>
													<Button
														size="sm"
														className="h-8 rounded-full px-3 text-xs"
													>
														Add
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>

								<div className="mt-6 flex justify-center">
									<Button variant="outline" className="w-full">
										Load More
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Lifestyle-Focused Design */}
					<TabsContent value="lifestyle">
						<div className="bg-[#FAFAFA] py-10">
							<div className="container mx-auto">
								<h2 className="mb-2 text-center text-3xl font-light">
									Curated Lifestyle
								</h2>
								<p className="mb-10 text-center text-muted-foreground">
									Products designed to enhance your everyday experiences
								</p>

								<div className="mb-12">
									<div className="relative h-[400px] w-full overflow-hidden rounded-lg">
										<Image
											src="/placeholder.svg?height=800&width=1200"
											alt="Lifestyle banner"
											width={1200}
											height={800}
											className="h-full w-full object-contain"
										/>
										<div className="absolute inset-0 flex items-center bg-black/30 p-8">
											<div className="max-w-md text-white">
												<h3 className="mb-4 text-4xl font-light">
													Modern Living Collection
												</h3>
												<p className="mb-6">
													Discover products that blend seamlessly into your
													contemporary lifestyle.
												</p>
												<Button className="rounded-none bg-white text-black hover:bg-gray-100">
													Shop the Collection
												</Button>
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
									{products.slice(0, 6).map((product) => (
										<div
											key={product.id}
											className="group overflow-hidden rounded-lg bg-white shadow-md"
										>
											<div className="relative h-[300px] overflow-hidden">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
												<div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
													<p className="text-sm">{product.description}</p>
												</div>
											</div>
											<div className="p-6">
												<h3 className="mb-2 text-xl font-medium">
													{product.name}
												</h3>
												<div className="mb-4 flex items-center gap-2">
													<div className="flex">
														{[...Array(5)].map((_, i) => (
															<Star
																key={i}
																className={`h-4 w-4 ${
																	i < Math.floor(product.rating)
																		? "fill-yellow-400 text-yellow-400"
																		: "fill-gray-200 text-gray-200"
																}`}
															/>
														))}
													</div>
													<span className="text-sm text-gray-500">
														({product.reviews})
													</span>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-xl font-medium">
														${product.price.toFixed(2)}
													</span>
													<Button variant="outline">Add to Cart</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Dark Mode Aesthetic Design */}
					<TabsContent value="dark">
						<div className="bg-[#121212] py-10 text-white">
							<div className="container mx-auto">
								<h2 className="mb-8 text-center text-3xl font-bold text-white">
									Featured <span className="text-[#BB86FC]">Products</span>
								</h2>

								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
									{products.map((product) => (
										<div
											key={product.id}
											className="group overflow-hidden rounded-lg bg-[#1E1E1E] transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(187,134,252,0.3)]"
										>
											<div className="relative">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-[220px] w-full object-contain"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 transition-opacity group-hover:opacity-70"></div>
												<div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 opacity-0 transition-opacity group-hover:opacity-100">
													<Button className="bg-[#BB86FC] text-black hover:bg-[#A66DF7]">
														Quick View
													</Button>
												</div>
											</div>
											<div className="p-4">
												<div className="mb-2 flex items-center justify-between">
													<Badge
														variant="outline"
														className="border-[#BB86FC] text-[#BB86FC]"
													>
														{product.category}
													</Badge>
													<div className="flex items-center gap-1">
														<Star className="h-4 w-4 fill-[#BB86FC] text-[#BB86FC]" />
														<span className="text-sm">{product.rating}</span>
													</div>
												</div>
												<h3 className="mb-1 text-lg font-medium text-white">
													{product.name}
												</h3>
												<p className="mb-3 text-sm text-gray-400">
													{product.description.substring(0, 60)}...
												</p>
												<div className="flex items-center justify-between">
													<span className="text-xl font-bold text-[#BB86FC]">
														${product.price.toFixed(2)}
													</span>
													<Button
														variant="outline"
														size="sm"
														className="border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-black"
													>
														Add to Cart
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>

					{/* High-Conversion Optimized Design */}
					<TabsContent value="conversion">
						<div className="bg-white py-8">
							<div className="container mx-auto">
								<div className="mb-8 rounded-lg bg-[#FFF9E6] p-4 text-center">
									<p className="font-medium text-[#B78103]">
										🔥 Limited Time Offer: Free shipping on orders over $50!
										Ends in 24 hours.
									</p>
								</div>

								<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
									<h2 className="text-2xl font-bold">Best Selling Products</h2>
									<div className="flex items-center gap-2">
										<span className="text-sm text-muted-foreground">
											Sort by:
										</span>
										<Select defaultValue="popular">
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Sort by" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="popular">Most Popular</SelectItem>
												<SelectItem value="newest">Newest Arrivals</SelectItem>
												<SelectItem value="price-low">
													Price: Low to High
												</SelectItem>
												<SelectItem value="price-high">
													Price: High to Low
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
									{products.map((product) => (
										<div
											key={product.id}
											className="group relative rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
										>
											{product.discount > 0 && (
												<div className="absolute -right-2 -top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
													SAVE {product.discount}%
												</div>
											)}
											{product.isBestseller && (
												<div className="absolute left-0 top-3 z-10 bg-amber-500 px-2 py-1 text-xs font-bold text-white">
													BESTSELLER
												</div>
											)}
											<div className="relative mb-4">
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="mx-auto h-[200px] w-full object-contain"
												/>
												{!product.inStock && (
													<div className="absolute inset-0 flex items-center justify-center bg-white/70">
														<span className="rounded bg-gray-800 px-2 py-1 text-sm font-medium text-white">
															Out of Stock
														</span>
													</div>
												)}
											</div>
											<div className="mb-2 flex items-center gap-1">
												<div className="flex">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`h-4 w-4 ${
																i < Math.floor(product.rating)
																	? "fill-yellow-400 text-yellow-400"
																	: "fill-gray-200 text-gray-200"
															}`}
														/>
													))}
												</div>
												<span className="text-sm text-blue-600 hover:underline">
													({product.reviews})
												</span>
											</div>
											<h3 className="mb-1 text-lg font-medium">
												{product.name}
											</h3>
											<div className="mb-3 flex items-center gap-2">
												<span className="text-xl font-bold">
													${product.price.toFixed(2)}
												</span>
												{product.discount > 0 && (
													<span className="text-sm text-gray-500 line-through">
														$
														{(
															product.price +
															(product.price * product.discount) / 100
														).toFixed(2)}
													</span>
												)}
											</div>
											<div className="mb-2 flex items-center gap-2">
												<div className="h-2 w-full rounded-full bg-gray-200">
													<div
														className="h-2 rounded-full bg-red-500"
														style={{ width: `${Math.random() * 70 + 30}%` }}
													></div>
												</div>
												<span className="text-xs font-medium text-red-500">
													Selling fast!
												</span>
											</div>
											<Button className="mt-2 w-full bg-green-600 hover:bg-green-700">
												Add to Cart
											</Button>
											<div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
												</svg>
												Secure Payment
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<rect width="20" height="12" x="2" y="6" rx="2" />
													<circle cx="12" cy="12" r="2" />
													<path d="M6 12h.01M18 12h.01" />
												</svg>
												Free Returns
											</div>
										</div>
									))}
								</div>

								<div className="mt-8 flex justify-center">
									<Button className="bg-blue-600 px-8 hover:bg-blue-700">
										Load More Products
									</Button>
								</div>
							</div>
						</div>
					</TabsContent>

					{/* Interactive & Immersive Design */}
					<TabsContent value="interactive">
						<div className="bg-white py-8">
							<div className="container mx-auto">
								<h2 className="mb-8 text-center text-3xl font-bold">
									Interactive Product Gallery
								</h2>

								<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
									{products.slice(0, 6).map((product) => (
										<div
											key={product.id}
											className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
										>
											<div className="relative h-[300px] overflow-hidden">
												{/* Main product image */}
												<Image
													src={product.image || "/placeholder.svg"}
													alt={product.name}
													width={300}
													height={300}
													className="h-full w-full object-contain transition-all duration-500 group-hover:opacity-0"
												/>
												{/* 360 view simulation (would be a real 360 viewer in production) */}
												<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
													<Image
														src={product.image || "/placeholder.svg"}
														alt={`${product.name} - 360 view`}
														width={300}
														height={300}
														className="h-full w-full object-cover"
													/>
													<div className="absolute inset-0 flex items-center justify-center">
														<div className="rounded-full bg-white/80 p-3">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="24"
																height="24"
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															>
																<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
																<path d="M21 3v5h-5" />
															</svg>
														</div>
													</div>
												</div>
												{/* Quick view button */}
												<div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger asChild>
																<Button className="bg-white text-black hover:bg-gray-100">
																	Quick View
																</Button>
															</TooltipTrigger>
															<TooltipContent>
																<p>Click to see product details</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</div>
											</div>
											<div className="p-6">
												<h3 className="mb-2 text-xl font-medium">
													{product.name}
												</h3>
												<div className="mb-3 flex items-center gap-2">
													<div className="flex">
														{[...Array(5)].map((_, i) => (
															<Star
																key={i}
																className={`h-4 w-4 ${
																	i < Math.floor(product.rating)
																		? "fill-yellow-400 text-yellow-400"
																		: "fill-gray-200 text-gray-200"
																}`}
															/>
														))}
													</div>
													<span className="text-sm text-gray-500">
														({product.reviews})
													</span>
												</div>
												<p className="mb-4 text-sm text-gray-600">
													{product.description}
												</p>
												<div className="mb-4">
													<div className="flex items-center justify-between">
														<span className="text-lg font-bold">
															${product.price.toFixed(2)}
														</span>
														<div className="flex items-center gap-1">
															<Info className="h-4 w-4 text-gray-400" />
															<span className="text-xs text-gray-500">
																Hover for 360° view
															</span>
														</div>
													</div>
												</div>
												<div className="flex gap-2">
													<Button className="flex-1">Add to Cart</Button>
													<Button variant="outline" size="icon">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20"
															height="20"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</Button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
