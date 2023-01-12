import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './SearchBar.module.scss';


const SearchBar = () => {
  return (
    <div>
      <SearchOutlinedIcon />
      <input
      className={styles.input}
      placeholder='Enter your request'/>
    </div>
  )
}

export default SearchBar;