import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compress: true,
	experimental: {
		optimizePackageImports: ["react-icons", "framer-motion"],
	},
	images: {
		qualities: [75, 80, 85],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
};

export default nextConfig;
