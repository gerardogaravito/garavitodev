import React, { FC } from 'react';
import styles from './sdCard.module.scss';
import { SD_CARDS_TYPE } from '../../constants/sd_cards';

interface SdCardProps extends SD_CARDS_TYPE { }

const SdCard: FC<SdCardProps> = ({ title, url }) => {
  return (
    <button className={styles.button} onClick={() => window.open(url, '_blank')}>
      <p>{title}</p>
    </button>
  );
}

export default SdCard