import HeaderText from '../HeaderText/HeaderText';
import styles from './NewsFull.module.scss';

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const News = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {title, urlToImage, content} = state;

  const backToHome = () => {
    navigate("/");
  }

  return (
    <div className={styles.news_wrapper}>
      <img className={styles.news_imageBanner} alt="banner" src={urlToImage ? urlToImage : 'https://static01.nyt.com/images/2021/02/21/insider/21insider-a1-top/21insider-a1-DONOTPUB-videoSixteenByNineJumbo1600.jpg'} />

      <div className={styles.news_article}>
        <div className={styles.news_article_wrap}>
          <h2 className={styles.news_header}>{title ? title : 'Default title'}</h2>
          <p className={styles.news_text}>{content ? content : 'Default content'}</p>
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