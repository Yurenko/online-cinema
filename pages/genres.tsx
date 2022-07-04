import Collections from '@/components/screens/collections/Collections'
import { ICollection } from '@/components/screens/collections/collections.types'
import { GenreService } from '@/services/genre.service'
import { GetStaticProps, NextPage } from 'next'



const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: { collections },
			revalidate: 60
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenresPage
