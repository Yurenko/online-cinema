import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/Logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logo}
					width={247}
					height={80}
					alt="Netflix"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
