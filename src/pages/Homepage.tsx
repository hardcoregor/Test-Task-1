import React, { useEffect } from 'react'
import { HeaderText, NewsList, SearchBar } from '../components'
import styles from '../App.module.scss';
import { useAppSelector } from '../hooks/useTypedSelector';

const Homepage = () => {
  const allArticles = useAppSelector(state => state.data);
  const articlesLength = allArticles && Object.values(allArticles).length;


  return (
    <div className={styles.container}>
      <HeaderText title={'Filter by keywords'} classStyle={{ marginBottom: "10px" }} />

      <SearchBar />

      <HeaderText title={`Result: ${articlesLength}`} />

      <div style={{ border: "1px solid #EAEAEA", width: '100%', marginTop: '5px' }} />

      <NewsList />
    </div>
  )
}

export default Homepage