import React, { FC } from 'react';
import styles from './email.module.scss';

const Email: FC = () => {
  return (
    <section className={styles.container}>
      <a className={styles.email} href='mailto:contact@garavito.dev'>
        contact
        <br />
        <span>@garavito.dev</span>
      </a>
    </section>
  );
};

export default Email;
