import UserProfile from "@/components/simple-ui/avatars/avatarV1";
import ProfileCard from "@/components/simple-ui/avatars/avatarV2";
import AvatarGroup1 from "@/components/simple-ui/avatars/avatarV3";

export default function Page() {
	return (
		<div>
			<div className="flex h-[30vh] items-center justify-center p-4 bg-gray-800">
				<UserProfile
					name="Olivia Rhye"
					email="olivia@untitledui.com"
					avatarUrl="https://img.freepik.com/premium-photo/man-face-avatar-portrait-confident-expression-icon_279525-26561.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
					isOnline={true}
				/>
			</div>
			<div className="flex h-[60vh] items-center justify-center p-4 bg-gray-500">
				<ProfileCard
					name="Bonnie Green"
					title="CEO/Co-founder"
					bio="Bonnie drives the technical strategy of the themesberg platform and brand."
					avatarUrl="https://img.freepik.com/premium-photo/man-face-avatar-portrait-confident-expression-icon_279525-26561.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
				/>
			</div>
			<div className="">
				<AvatarGroup1 />
			</div>
		</div>
	);
}
