import React from 'react';
import styles from './index.module.scss';
import Apply from './apply';
function Settlement(props) {
  return (
    <div className={styles.settlement}>
      <Apply />
    </div>
  );
}

export default Settlement;
