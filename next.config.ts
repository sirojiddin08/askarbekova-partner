import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: false,
	compress: true,
	poweredByHeader: false,
	experimental: {
		optimizePackageImports: ["react-icons"],
	},
	images: {
		formats: ["image/avif", "image/webp"],
		qualities: [75, 80, 85],
		deviceSizes: [640, 750, 828, 1080, 1200],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
		minimumCacheTTL: 60 * 60 * 24 * 30,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},
};

export default nextConfig;
