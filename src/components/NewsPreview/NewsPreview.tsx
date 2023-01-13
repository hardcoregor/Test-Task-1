import React from 'react'
import { CalendarTodayOutlined, ArrowForwardOutlined } from '@mui/icons-material';

import styles from './NewsPreview.module.scss';

const NewsPreview = () => {
  return (
    <div className={styles.newsPrev_wrap}>
      <img src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="test" className={styles.newsPrev_img} />

      <div className={styles.newsPrev_container}>
        <div className={styles.newsPrev_date}>
          <CalendarTodayOutlined />
          <span className={styles.newsPrev_num}>June 29th, 2021</span>
        </div>

        <p className={styles.newsPrev_title}>The 2020 World's Most Valuable Brands</p>

        <p className={styles.newsPrev_text}>Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...</p>

        <div className={styles.newsPrev_footer}>
          <span>Read more</span>
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