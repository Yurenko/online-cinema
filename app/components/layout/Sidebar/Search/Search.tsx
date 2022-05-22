import { FC } from 'react'

import SearchField from '@/components/ui/search-field/SearchField'

import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movie={data || []} />}
		</div>
	)
}

export default Search
