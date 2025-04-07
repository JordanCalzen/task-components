import CtaV1 from "@/components/simple-ui/cta-sections/cta-sectionV1";
import ModernCTAWithApp from "@/components/simple-ui/cta-sections/cta-sectionV2";
import HeroGeometric from "@/components/simple-ui/cta-sections/cta-sectionV3";
import CtaV4 from "@/components/simple-ui/cta-sections/cta-sectionV4";
import { CtaV5 } from "@/components/simple-ui/cta-sections/cta-sectionV5";
import CtaV2 from "@/components/simple-ui/CtaV2";
import React from "react";

export default function page() {
	return (
		<div>
			<CtaV1 />
			<ModernCTAWithApp />
			<CtaV2 />
			<HeroGeometric />
			<CtaV4 />
			<div></div>
			<CtaV5 />
		</div>
	);
}
