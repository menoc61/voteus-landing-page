import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the App from know</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get started with and create the voting sytem of your community</p>
        </div>
        <button className={styles.btnPrimary}>Apple store</button>
        <button className={styles.btnPrimary}>Google play</button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download