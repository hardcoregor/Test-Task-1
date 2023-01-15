import React, {useCallback} from 'react'
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

const NewsPreview = ({ date, title, content, urlToImage, handleClick}: any) => {
  const search = useAppSelector(state => state.search);

  const Highlight = (props: any) => {
    const { filter, str } = props;
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig');
    const matchValue = str.match(regexp);
    if (matchValue) {
      return str.split(regexp).map((s: any, index: any, array: any) => {
        if (index < array.length - 1) {
          const c = matchValue.shift()
          return <>{s}<span className={styles.highlight}>{c}</span></>
        }
        return s
      })
    }
    return str
  }

  const highLightning = useCallback((str:any) => {
    return <Highlight filter={search} str={str} />
  }, [search])

  return (
    <div className={styles.newsPrev_wrap}>
      <img onClick={handleClick} src={urlToImage} alt="test" className={styles.newsPrev_img} />

      <div className={styles.newsPrev_container}>
        <div className={styles.newsPrev_date}>
          <CalendarTodayOutlined />
          <span className={styles.newsPrev_num}>{date}</span>
        </div>

        <p className={styles.newsPrev_title}>{highLightning(title)}</p>

        <p className={styles.newsPrev_text}>{highLightning(content.slice(0, 200))}</p>

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