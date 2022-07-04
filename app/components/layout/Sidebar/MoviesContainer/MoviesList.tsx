import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import styles from './MoviesList.module.scss'
import { IMovieList } from './movies-list.interface'

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>
					{link === '/trending' ? 'All trending movies' : 'All popular movies'}
				</a>
			</Link>
		</div>
	)
}

export default MovieList
