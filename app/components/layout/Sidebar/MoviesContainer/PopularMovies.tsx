import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

import { MovieService } from '@/services/movie.service'

import MoviesList from './MoviesList'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-11">
			{' '}
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MoviesList link='/trending' movies={popularMovies || []} title='Popular movies'/>
	)
}

export default PopularMovies
