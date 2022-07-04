import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/Logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={styles.link}>
				<Image
					src={logo}
					width="247"
					height="80"
					alt="Netflix"
					draggable={false}
					unoptimized
					layout="fixed"
				/>
			</a>
		</Link>
	)
}

export default Logo
