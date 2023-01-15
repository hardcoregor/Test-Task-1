import React from 'react'
import { CalendarTodayOutlined, ArrowForwardOutlined } from '@mui/icons-material';

import styles from './NewsPreview.module.scss';

type NewsProps = {
  date: string;
  title: string;
  content: string;
  urlToImage: string;
  handleClick: any;
}

const NewsPreview = ({ date, title, content, urlToImage, handleClick }: NewsProps) => {

  return (
    <div className={styles.newsPrev_wrap}>
      <img onClick={handleClick} src={urlToImage} alt="test" className={styles.newsPrev_img} />

      <div className={styles.newsPrev_container}>
        <div className={styles.newsPrev_date}>
          <CalendarTodayOutlined />
          <span className={styles.newsPrev_num}>{date}</span>
        </div>

        <p className={styles.newsPrev_title}>{title}</p>

        <p className={styles.newsPrev_text}>{content.slice(0, 200)}</p>

        <div className={styles.newsPrev_footer}>
          <span onClick={handleClick}>Read more</span>
          <ArrowForwardOutlined
            sx={{
              color: '#130F26',
              width: '15px',
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default NewsPreview;