import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

export default function AvatarGroup1() {
	return (
		<div className=" container p-4 flex items-center justify-center">
			<div className="flex -space-x-3">
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/portrait-smiling-young-businesswoman-standing-with-her-arm-crossed-against-gray-wall_23-2147943827.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>AC</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>WP</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10 bg-black flex items-center justify-center">
					<Plus className="h-5 w-5 text-white" />
				</Avatar>
			</div>
		</div>
	);
}
