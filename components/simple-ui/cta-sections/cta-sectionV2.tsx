import {
	ArrowRight,
	Calendar,
	ChevronRight,
	Home,
	Inbox,
	LayoutDashboard,
	MoreHorizontal,
	Plus,
	Search,
	Settings,
	Users,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider,
} from "@/components/ui/sidebar";

export default function ModernCTAWithApp() {
	return (
		<section className="bg-gradient-to-br from-gray-950 to-gray-900 text-white py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Section - Text & CTA Buttons */}
					<div className="space-y-8">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
							<span className="text-white">Streamline your workflow with </span>
							<span className="text-gray-100 relative">
								powerful tools
								<span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70"></span>
							</span>
						</h2>

						<p className="text-lg text-gray-300 max-w-lg font-light leading-relaxed">
							Our intuitive platform helps teams collaborate seamlessly, track
							progress effortlessly, and deliver projects on time, every time.
						</p>

						<div className="flex flex-wrap gap-4 items-center">
							<button className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-white/10 hover:shadow-white/20">
								Get started
							</button>
							<a
								href="#"
								className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors group"
							>
								See how it works
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</div>

					{/* Right Section - Application Preview */}
					<div className="relative">
						<div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
							<div className="flex h-[500px]">
								<AppSidebar />
								<div className="flex-1 p-4">
									<div className="flex justify-between items-center mb-6">
										<h3 className="font-medium text-lg">Projects</h3>
										<div className="flex items-center gap-2">
											<button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
												<Search className="w-4 h-4 text-gray-400" />
											</button>
											<button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
												<Plus className="w-4 h-4 text-gray-400" />
											</button>
										</div>
									</div>

									<div className="space-y-3">
										<ProjectCard
											title="Website Redesign"
											status="In Progress"
											statusColor="bg-amber-500"
											date="Due in 3 days"
											progress={65}
										/>
										<ProjectCard
											title="Mobile App Development"
											status="Completed"
											statusColor="bg-green-500"
											date="Completed yesterday"
											progress={100}
										/>
										<ProjectCard
											title="Marketing Campaign"
											status="Planning"
											statusColor="bg-blue-500"
											date="Starts next week"
											progress={15}
										/>
										<ProjectCard
											title="User Research"
											status="On Hold"
											statusColor="bg-gray-500"
											date="No deadline"
											progress={30}
										/>
										<ProjectCard
											title="Product Launch"
											status="Not Started"
											statusColor="bg-purple-500"
											date="Due in 2 weeks"
											progress={0}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Background decorative elements */}
						<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
						<div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

function AppSidebar() {
	return (
		<SidebarProvider defaultOpen={true}>
			<Sidebar
				variant="sidebar"
				collapsible="none"
				className="!w-[200px] !static !h-auto border-r border-gray-800"
			>
				<SidebarHeader className="border-b border-gray-800">
					<div className="flex items-center gap-2 px-2 py-4">
						<div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
							<LayoutDashboard className="w-4 h-4 text-white" />
						</div>
						<span className="font-semibold">Workflow</span>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton isActive>
								<Home className="w-4 h-4" />
								<span>Dashboard</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Inbox className="w-4 h-4" />
								<span>Inbox</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Calendar className="w-4 h-4" />
								<span>Calendar</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Users className="w-4 h-4" />
								<span>Team</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter className="border-t border-gray-800">
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Settings className="w-4 h-4" />
								<span>Settings</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	);
}

function ProjectCard({
	title,
	status,
	statusColor,
	date,
	progress,
}: {
	title: string;
	status: string;
	statusColor: string;
	date: string;
	progress: number;
}) {
	return (
		<div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/80 transition-colors cursor-pointer">
			<div className="flex justify-between items-start mb-3">
				<div>
					<h4 className="font-medium">{title}</h4>
					<div className="flex items-center gap-2 mt-1">
						<div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
						<span className="text-xs text-gray-400">{status}</span>
					</div>
				</div>
				<button className="p-1 rounded-md hover:bg-gray-700 transition-colors">
					<MoreHorizontal className="w-4 h-4 text-gray-400" />
				</button>
			</div>
			<div className="flex justify-between items-center">
				<span className="text-xs text-gray-400">{date}</span>
				<div className="flex items-center gap-2">
					<div className="w-20 h-1.5 bg-gray-700 rounded-full overflow-hidden">
						<div
							className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
							style={{ width: `${progress}%` }}
						></div>
					</div>
					<ChevronRight className="w-4 h-4 text-gray-500" />
				</div>
			</div>
		</div>
	);
}
