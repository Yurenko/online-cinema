import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import imageLoader from '@/assets/images/ImageLoader'

import { useAuth } from '@/hooks/useAuth'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'
import { IFavoriteItem } from './favorites.interface'

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
	const { user } = useAuth()

	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={item._id} />}
			<Link href={item.url}>
				<a className={styles.item}>
					<Image
						loader={imageLoader}
						alt={item.name}
						src={item.posterPath}
						layout="fill"
						draggable={false}
						priority
					/>

					<div className={styles.title}>{item.title}</div>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem
