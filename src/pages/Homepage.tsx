import Divider from '@mui/material/Divider';

import { HeaderText, NewsList, SearchBar } from '../components'
import styles from '../App.module.scss';
import { useAppSelector } from '../hooks/useTypedSelector';


const Homepage = () => {
  const resultLength = useAppSelector(state => state.resultLength);

  return (
    <div className={styles.container}>
      <HeaderText title={'Filter by keywords'} classStyle={{ marginBottom: "10px" }} />

      <SearchBar />

      <HeaderText title={`Result: ${resultLength === 0 ? 0 : resultLength}`} />

      <Divider />

      <NewsList />
    </div>
  )
}

export default Homepage