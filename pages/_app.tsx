import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'
import type { ReactElement, ReactNode } from 'react'

import '@/assets/styles/globals.scss'

import { TypeComponentAuthField } from '@/shared/types/auth.types'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

type TypeAppProps = AppProps & TypeComponentAuthField & AppPropsWithLayout

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
