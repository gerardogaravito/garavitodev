import React, { FC } from 'react';
import styles from './email.module.scss';

const Email: FC = () => {
  return (
    <section className={styles.container}>
      <a className={styles.email} href='mailto:garavitogerardo@gmail.com'>
        garavitogerardo
        <br />
        <span>@gmail.com</span>
      </a>
    </section>
  );
};

export default Email;
