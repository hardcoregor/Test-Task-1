import React from 'react'
import { HeaderTexts } from '../../types/models'
import styles from './HeaderText.module.scss';

const HeaderText = ({ title, classStyle }: HeaderTexts) => {
  return (
    <div className={`${styles.title}`} style={classStyle}>{title}</div >
  )
}

export default HeaderText