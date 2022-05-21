import { FC } from 'react'

import Menu from './Menu'
import GeneresMenu from './generes/GeneresMenu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GeneresMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
