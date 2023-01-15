import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { NewsPreview } from '../';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getFilteredNews, getResultLength } from '../../store/features/news/newsSlice';
import { INews, News } from '../../types/INews';
import styles from './NewsList.module.scss';

const NewsList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useAppSelector(state => state.search);

  const handleNavigate: any = (wholeArticle: any) => {
    navigate(`/articles/${wholeArticle.title}`, { state: wholeArticle })
  }

  const articlesFetch = useAppSelector(state => state.data);


  const filterNews = (articlesFetch: any) => {
    const resultsArray = articlesFetch && articlesFetch.filter((article: any) => article.title.includes(search) || article.content.includes(search));
    return resultsArray
  }

  const filteredNews: any = filterNews(articlesFetch);

  useEffect(() => {
    if (filteredNews) {
      dispatch(getFilteredNews(filteredNews));
      dispatch(getResultLength(filteredNews.length));
    }
  }, [dispatch, filteredNews])

  return (
    <div className={styles.newsList}>
      {filteredNews ? (
        filteredNews.map((article: News) => (
          <NewsPreview
            key={article.publishedAt}
            date={article.publishedAt}
            title={article.title}
            content={article.content}
            urlToImage={article.urlToImage}
            handleClick={() => handleNavigate(article)}
          />
        ))
      ) : (
        articlesFetch && Object.values(articlesFetch).map((article: News) => (
          <NewsPreview
            key={article.publishedAt}
            date={article.publishedAt}
            title={article.title}
            content={article.content}
            urlToImage={article.urlToImage}
            handleClick={() => handleNavigate(article)}
          />
        ))
      )}


    </div>
  )
}

export default NewsList;