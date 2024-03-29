import Image from 'next/image'
import React, { FC } from 'react'

import imageLoader from '@/assets/images/ImageLoader'

import styles from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ imagePath, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				loader={imageLoader}
				alt=""
				src={imagePath}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
