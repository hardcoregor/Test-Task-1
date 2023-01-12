import React from 'react'
import { HeaderText, NewsList, SearchBar } from '../components'
import styles from '../App.module.scss';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <HeaderText title={'Filter by keywords'} classStyle={{ marginBottom: "10px" }} />

      <SearchBar />

      <HeaderText title={'Result:'} />

      <div style={{border: "1px solid #EAEAEA", width: '100%', marginTop: '5px'}}/>

      <NewsList />
    </div>
  )
}

export default Homepage