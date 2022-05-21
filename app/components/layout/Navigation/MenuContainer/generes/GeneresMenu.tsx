import { FC } from 'react'

import Menu from '../Menu'

import { usePopularGeneral } from './usePopularGeneres'

const GeneresMenu: FC = () => {
	const { isLoading, data } = usePopularGeneral()
	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GeneresMenu
