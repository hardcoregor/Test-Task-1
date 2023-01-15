import React, { useCallback } from 'react'
import { CalendarTodayOutlined, ArrowForwardOutlined } from '@mui/icons-material';

import styles from './NewsPreview.module.scss';
import { useAppSelector } from '../../hooks/useTypedSelector';

type NewsProps = {
  date: string;
  title: string;
  content: string;
  urlToImage: string;
  handleClick: any;
}

const NewsPreview: React.FC<NewsProps> = ({ date, title, content, urlToImage, handleClick }) => {
  const search = useAppSelector(state => state.search);

  const Highlight = (props: any) => {
    const { filterWord, content } = props;

    if (!filterWord) return content
    const regexp = new RegExp(filterWord, 'ig');
    const matchValue = content.match(regexp);

    if (matchValue) {
      return content.split(regexp).map((s: string, index: number, array: any) => {

        if (index < array.length - 1) {
          const c = matchValue.shift()
          return <>{s}<span className={styles.highlight}>{c}</span></>
        }

        return s
      })
    }
    return content
  }

  const highLightning = useCallback((str: string) => {
    return <Highlight filter={search} str={str} />
  }, [search])

  return (
    <div className={styles.newsPrev_wrap}>
      <img onClick={handleClick} src={urlToImage ? urlToImage : 'https://static01.nyt.com/images/2021/02/21/insider/21insider-a1-top/21insider-a1-DONOTPUB-videoSixteenByNineJumbo1600.jpg'} alt="test" className={styles.newsPrev_img} />

      <div className={styles.newsPrev_container}>
        <div className={styles.newsPrev_date}>
          <CalendarTodayOutlined />
          <span className={styles.newsPrev_num}>{date}</span>
        </div>

        <p className={styles.newsPrev_title}>{highLightning(title ? title : 'Default title')}</p>

        <p className={styles.newsPrev_text}>{highLightning(content ? content?.slice(0, 200) : 'Article without long read ;(')}</p>

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