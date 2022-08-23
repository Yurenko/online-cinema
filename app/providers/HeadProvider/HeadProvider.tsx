import Head from 'next/head'
import { Props } from 'next/script'
import NextNProgress from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import { accentColor } from '@/config/constans'

import Favicons from './Favicons'

const HeadProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
				<link rel="manifest" href="/online-cinema/manifest.json" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
