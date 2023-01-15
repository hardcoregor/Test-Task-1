import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NewsPreview } from '../';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { getFilteredNews, getResultLength } from '../../store/features/news/newsSlice';
import { News } from '../../types/INews';
import styles from './NewsList.module.scss';

const NewsList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useAppSelector(state => state.search);

  const handleNavigate: any = (wholeArticle: News) => {
    navigate(`/articles/${wholeArticle.title}`, { state: wholeArticle })
  }

  const articlesFetch = useAppSelector(state => state.data);


  const filterNews = (articlesFetch: any) => {
    const resultsArray = articlesFetch && articlesFetch.filter((article: News) => article?.title?.includes(search) || article?.content?.includes(search));
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
        filteredNews.map((article: any) => (
          <NewsPreview
            key={article.pubDate}
            date={article.pubDate}
            title={article.title}
            content={article.content}
            urlToImage={article.image_url}
            handleClick={() => handleNavigate(article)}
          />
        ))
      ) : (
        articlesFetch && Object.values(articlesFetch).map((article: any) => (
          <NewsPreview
            key={article.publishedAt}
            date={article.publishedAt}
            title={article.title}
            content={article.content}
            urlToImage={article.image_url}
            handleClick={() => handleNavigate(article)}
          />
        ))
      )}


    </div>
  )
}

export default NewsList;