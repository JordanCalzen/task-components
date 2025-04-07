import Image from "next/image";

interface UserProfileProps {
	name: string;
	email: string;
	avatarUrl: string;
	isOnline?: boolean;
}

export default function UserProfile({
	name = "Olivia Rhye",
	email = "olivia@untitledui.com",
	avatarUrl = "/placeholder.svg?height=40&width=40",
	isOnline = true,
}: UserProfileProps) {
	return (
		<div className="flex items-center gap-3 bg-gray-900 p-3 rounded-lg max-w-xs">
			{/* Avatar with online indicator */}
			<div className="relative">
				<div className="h-10 w-10 rounded-full overflow-hidden">
					<Image
						src={avatarUrl || "/placeholder.svg"}
						alt={`${name}'s profile picture`}
						width={40}
						height={40}
						className="object-cover w-full h-full"
					/>
				</div>

				{isOnline && (
					<div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-gray-900"></div>
				)}
			</div>

			{/* User info */}
			<div className="flex flex-col">
				<span className="text-white font-medium text-sm">{name}</span>
				<span className="text-gray-400 text-xs">{email}</span>
			</div>
		</div>
	);
}
