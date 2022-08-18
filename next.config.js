/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'akamai',
		path: '/',
	},
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://powerful-stream-29803.herokuapp.com/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination:
					'https://powerful-stream-29803.herokuapp.com/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
