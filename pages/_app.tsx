import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import '@/assets/styles/globals.scss'

import { TypeComponentAuthField } from '@/shared/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthField

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
