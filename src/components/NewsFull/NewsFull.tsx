import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import styles from './NewsFull.module.scss';

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const News: React.FC<any> = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { title, image_url, description } = state;

  const backToHome = () => {
    navigate("/");
  }

  return (
    <div className={styles.news_wrapper}>
      <img className={styles.news_imageBanner} alt="banner" src={image_url ? image_url : 'https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png'} />

      <div className={styles.news_article}>
        <div className={styles.news_article_wrap}>
          <h2 className={styles.news_header}>{title ? title : 'Default title'}</h2>
          <p className={styles.news_text}>{description ? description : 'Default content'}</p>
        </div>

        <div className={styles.news_button} onClick={backToHome}>
          <KeyboardBackspaceOutlinedIcon
            sx={{
              color: '#130F26',
            }}
          />
          <HeaderText title={'Back to homepage'} classStyle={{ fontWeight: '700', fontSize: '16px', color: '#363636', cursor: 'pointer', marginLeft: '6px' }} />
        </div>
      </div>
    </div>
  )
}

export default News;