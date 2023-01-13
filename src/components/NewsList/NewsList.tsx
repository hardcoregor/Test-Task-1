import React from 'react'
import {NewsPreview} from '../';
import { useAppSelector } from '../../hooks/useTypedSelector';
import styles from './NewsList.module.scss';

const NewsList = () => {
  const articles = useAppSelector(state => state.data);

  return (
    <div className={styles.newsList}>
      <NewsPreview />
      <NewsPreview />
      <NewsPreview />
      <NewsPreview />
      <NewsPreview />
      <NewsPreview />
    </div>
  )
}

export default NewsList;