import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.types'

import { getMovieUrl } from '@/config/url.config'

import { MovieService } from '@/services/movie.service'

import { IMovie } from '@/shared/types/movie.types'

import Error404 from '../404'

const SingleMoviePage: NextPage<{
	movie: IMovie | undefined
	similarMovies: IGalleryItem[]
}> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getMovies()
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug || '404' },
		}))

		return { paths, fallback: 'blocking' }
	} catch {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)
		console.log(`Building slug: ${params?.slug}`)
		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: { movie, similarMovies },
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			notFound: true,
			revalidate: 60,
		}
	}
}

export default SingleMoviePage
