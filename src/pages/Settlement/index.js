import React from 'react';
import styles from './index.module.scss';
import Apply from './apply';
import Rule from './rule';
function Settlement(props) {
  return (
    <div className={styles.settlement}>
      <Apply />
      <Rule />
    </div>
  );
}

export default Settlement;
