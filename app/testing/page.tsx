import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bath, Bed, Heart, Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
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
			description:
				"Comfortable seating with lumbar support for long work hours.",
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
			description:
				"Handcrafted genuine leather bag with multiple compartments.",
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
			description:
				"Waterproof speaker with 20-hour battery life and rich sound.",
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
	const properties = [
		{
			id: "1",
			name: "Wander Blue Ridge Retreat",
			location: "BLUE RIDGE, GEORGIA",
			image: "",
			tag: { text: "Surprise reward", type: "reward" as const },
			availabilityStart: "2025-03-25",
			availabilityEnd: "2025-03-28",
			bedrooms: 3,
			bathrooms: 2,
			maxGuests: 6,
			rating: 4.8,
		},
		{
			id: "2",
			name: "Wander Yucca Valley",
			location: "YUCCA VALLEY, CALIFORNIA",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Deal of the day", type: "deal" as const },
			availabilityStart: "2025-04-24",
			availabilityEnd: "2025-04-28",
			bedrooms: 2,
			bathrooms: 1,
			maxGuests: 4,
			rating: 4.9,
		},
		{
			id: "3",
			name: "Wander Encinitas Shores",
			location: "ENCINITAS, CALIFORNIA",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Summer spots", type: "summer" as const },
			availabilityStart: "2025-05-05",
			availabilityEnd: "2025-05-08",
			bedrooms: 3,
			bathrooms: 4,
			maxGuests: 10,
			rating: 4.7,
			allowOffers: true,
		},
		{
			id: "4",
			name: "Wander Paradise Valley",
			location: "PARADISE VALLEY, ARIZONA",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Surprise reward", type: "reward" as const },
			availabilityStart: "2025-04-03",
			availabilityEnd: "2025-04-04",
			bedrooms: 4,
			bathrooms: 4,
			maxGuests: 8,
			rating: 4.9,
		},
		{
			id: "5",
			name: "Wander Cape Cod Oasis",
			location: "WELLFLEET, MASSACHUSETTS",
			image: "/placeholder.svg?height=600&width=800",
			availabilityStart: "2025-03-25",
			availabilityEnd: "2025-03-28",
			bedrooms: 4,
			bathrooms: 4.5,
			maxGuests: 8,
			rating: 4.8,
		},
		{
			id: "6",
			name: "Wander Lake Tahoe",
			location: "TAHOE CITY, CALIFORNIA",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Just launched", type: "new" as const },
			availabilityStart: "2025-04-10",
			availabilityEnd: "2025-04-15",
			bedrooms: 5,
			bathrooms: 3,
			maxGuests: 12,
			rating: 4.9,
			isNew: true,
		},
		{
			id: "7",
			name: "Wander Smoky Mountain Lodge",
			location: "GATLINBURG, TENNESSEE",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Surprise reward", type: "reward" as const },
			availabilityStart: "2025-05-01",
			availabilityEnd: "2025-05-05",
			bedrooms: 6,
			bathrooms: 4,
			maxGuests: 14,
			rating: 4.7,
		},
		{
			id: "8",
			name: "Wander Desert Oasis",
			location: "PALM SPRINGS, CALIFORNIA",
			image: "/placeholder.svg?height=600&width=800",
			tag: { text: "Summer spots", type: "summer" as const },
			availabilityStart: "2025-06-15",
			availabilityEnd: "2025-06-20",
			bedrooms: 3,
			bathrooms: 3.5,
			maxGuests: 6,
			rating: 4.8,
			allowOffers: true,
		},
	];
	return (
		<div>
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
									<h3 className="mb-2 text-xl font-light">{product.name}</h3>
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

			<div className="bg-[#121212] py-10 px-4 text-white">
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
											className="border-[#00F0FF] text-[rgb(0,240,255)]"
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

			<div className="bg-[#FAFAFA] py-10">
				<div className="container mx-auto">
					<h2 className="mb-2 text-center text-3xl font-light">
						Curated Lifestyle
					</h2>
					<p className="mb-10 text-center text-muted-foreground">
						Products designed to enhance your everyday experiences
					</p>

					<div className="mb-12">
						<div
							className="relative h-[400px] w-full overflow-hidden rounded-lg bg-cover bg-center"
							style={{
								backgroundImage:
									"url('https://img.freepik.com/premium-photo/photo-innovative-health-fitness-tracking_933496-69161.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_keywords_boost')", // Replace with your image URL
							}}
						>
							{/* Linear Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

							{/* Dark Overlay for better contrast */}
							<div className="absolute inset-0 bg-black/40" />
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
								<div className="relative h-[300px] overflow-hidden w-full">
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
									<h3 className="mb-2 text-xl font-medium">{product.name}</h3>
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
			<main className="min-h-screen bg-background">
				<div className="relative">
					{/* Background image with overlay */}
					<div className="absolute inset-0 z-0">
						<div className="w-full h-[600px] relative">
							<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
							<div
								className="w-full h-full bg-cover bg-center"
								style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
							/>
						</div>
					</div>
				</div>

				{/* Property grid */}
				<div className="px-4 md:px-6 pb-12 py-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{properties.map((property) => (
							<div className="group relative rounded-lg overflow-hidden bg-background transition-all duration-300 hover:shadow-xl">
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={property.image || "/placeholder.svg"}
										alt={property.name}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
										sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									/>

									{/* Tag */}
									{property.tag && (
										<div
											className={`
                                  absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-medium
                                  ${
																		property.tag.type === "deal"
																			? "bg-blue-500 text-white"
																			: ""
																	}
                                  ${
																		property.tag.type === "reward"
																			? "bg-purple-500 text-white"
																			: ""
																	}
                                  ${
																		property.tag.type === "new"
																			? "bg-green-500 text-white"
																			: ""
																	}
                                  ${
																		property.tag.type === "summer"
																			? "bg-orange-500 text-white"
																			: ""
																	}
                                `}
										>
											{property.tag.text}
										</div>
									)}

									{/* Favorite button */}
									<button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
										<Heart className="w-4 h-4" />
									</button>
								</div>

								<div className="p-4">
									<div className="uppercase text-xs font-semibold tracking-wider text-muted-foreground mb-1">
										{property.location}
									</div>
									<h3 className="text-lg font-semibold mb-2">
										{property.name}
									</h3>
									<div className="text-sm text-muted-foreground mb-3">
										Next avail. {property.availabilityStart} to{" "}
										{property.availabilityEnd}
									</div>

									<div className="flex items-center gap-3 text-sm">
										<div className="flex items-center gap-1">
											<Bed className="w-4 h-4" />
											<span>{property.bedrooms}</span>
										</div>
										<div className="flex items-center gap-1">
											<Bath className="w-4 h-4" />
											<span>{property.bathrooms}</span>
										</div>
										<div className="flex items-center gap-1">
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
											<span>{property.rating.toFixed(1)}</span>
										</div>
										<div className="flex items-center gap-1">
											<Users className="w-4 h-4" />
											<span>{property.maxGuests}</span>
										</div>
									</div>

									{property.allowOffers && (
										<button className="mt-4 w-full py-2 px-4 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
											Make an offer
										</button>
									)}
								</div>

								{property.isNew && (
									<div className="absolute bottom-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
										New
									</div>
								)}

								{/* Clickable overlay */}
								<a
									href={`/property/${property.id}`}
									className="absolute inset-0 z-20"
								>
									<span className="sr-only">View {property.name}</span>
								</a>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
