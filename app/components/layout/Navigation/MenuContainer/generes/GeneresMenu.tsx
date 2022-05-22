import { FC } from 'react'

import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGeneral } from './usePopularGeneres'

const GeneresMenu: FC = () => {
	const { isLoading, data } = usePopularGeneral()
	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-5 mt-4" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GeneresMenu
