import { IGalleryItem } from '@/components/ui/gallery/gallery.types'
import { ISlide } from '@/components/ui/slider/slider.types'

import { IMovie } from '@/shared/types/movie.types'

export interface ISlideMovie
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title' | 'genres' | 'slug'> {}

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
