import React, { useEffect } from 'react'
import { HeaderText, NewsList, SearchBar } from '../components'
import styles from '../App.module.scss';
import { useAppSelector } from '../hooks/useTypedSelector';

const Homepage = () => {
  const allArticles = useAppSelector(state => state.data);
  const articlesLength = allArticles && Object.values(allArticles).length;
  const resultLength = useAppSelector(state => state.resultLength);

  return (
    <div className={styles.container}>
      <HeaderText title={'Filter by keywords'} classStyle={{ marginBottom: "10px" }} />

      <SearchBar />

      <HeaderText title={`Result: ${resultLength === 0 ? 0 : resultLength}`} />

      <div style={{ border: "1px solid #EAEAEA", width: '100%', marginTop: '5px' }} />

      <NewsList />
    </div>
  )
}

export default Homepage