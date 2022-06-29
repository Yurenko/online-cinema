import { UserService } from '@/services/user.servises'
import { useQuery } from 'react-query'


export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
	})

	return { isLoading, favoritesMovies, refetch }
}
