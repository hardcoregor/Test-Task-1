import React, { useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './SearchBar.module.scss';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { getSearch } from '../../store/features/news/newsSlice';

const SearchBar = () => {
  const [query, setQuery] = React.useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getSearch(query.toLowerCase()));
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [dispatch, query])


  return (
    <div className={styles.searchBar_wrapper}>
      <SearchOutlinedIcon
        sx={{
          position: 'absolute'
        }}
      />
      <input
        type="text"
        className={styles.searchBar_input}
        placeholder='Enter your request'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;