import React, { useEffect } from 'react'

import { HeaderText, NewsList, SearchBar } from '../components'
import styles from '../App.module.scss';
import { useAppSelector } from '../hooks/useTypedSelector';

const Homepage = () => {
  const resultLength = useAppSelector(state => state.resultLength);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://newsdata.io/api/1/news?apikey=pub_15671e0784fad9ec29ee898e4009880ec1e95&category=sports&country=gb`
  //       )
  //       const {results} = await res.json()
  //       console.log(results)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchArticles()
  // }, [])



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