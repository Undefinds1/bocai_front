import React from 'react';
import styles from './index.module.scss';
import Apply from './apply';
import Rule from './rule';
import Record from './record';
function Settlement(props) {
  return (
    <div className={styles.settlement}>
      <Apply />
      <Rule />
      <Record />
    </div>
  );
}

export default Settlement;
