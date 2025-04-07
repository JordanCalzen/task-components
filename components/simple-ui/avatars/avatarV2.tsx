import Image from "next/image";
import { Facebook, Twitter, Github, Globe } from "lucide-react";

interface ProfileCardProps {
	name: string;
	title: string;
	bio: string;
	avatarUrl: string;
}

export default function ProfileCard({
	name = "Bonnie Green",
	title = "CEO/Co-founder",
	bio = "Bonnie drives the technical strategy of the themesberg platform and brand.",
	avatarUrl = "",
}: ProfileCardProps) {
	return (
		<div className="bg-gray-900 p-6 rounded-lg max-w-sm">
			<div className="flex flex-col items-center">
				{/* Avatar */}
				<div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
					<Image
						src={avatarUrl}
						alt={`${name}'s profile picture`}
						width={128}
						height={128}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Name and Title */}
				<h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
				<p className="text-blue-400 text-sm mb-3">{title}</p>

				{/* Bio */}
				<p className="text-gray-400 text-center mb-5">{bio}</p>

				{/* Social Media Icons */}
				<div className="flex space-x-4">
					<a
						href="#"
						className="text-gray-400 hover:text-white transition-colors"
					>
						<Facebook size={20} />
					</a>
					<a
						href="#"
						className="text-gray-400 hover:text-white transition-colors"
					>
						<Twitter size={20} />
					</a>
					<a
						href="#"
						className="text-gray-400 hover:text-white transition-colors"
					>
						<Github size={20} />
					</a>
					<a
						href="#"
						className="text-gray-400 hover:text-white transition-colors"
					>
						<Globe size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}
