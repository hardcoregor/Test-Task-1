import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './SearchBar.module.scss';


const SearchBar = () => {
  return (
    <div className={styles.searchBar_wrapper}>
      <SearchOutlinedIcon
        sx={{
          position: 'absolute'
        }}
      />
      <input
        className={styles.searchBar_input}
        placeholder='Enter your request' />
    </div>
  )
}

export default SearchBar;