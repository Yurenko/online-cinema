import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import imageLoader from '@/assets/images/ImageLoader'

import { getMovieUrl } from '@/config/url.config'

import { IMovie } from '@/shared/types/movie.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movie: IMovie[] }> = ({ movie }) => {
	return (
		<div className={styles.list}>
			{movie.length ? (
				movie.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<a>
							<Image
								loader={imageLoader}
								src={movie.poster}
								width={50}
								height={50}
								alt={movie.title}
								objectFit="cover"
								objectPosition="top"
								draggable={false}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
