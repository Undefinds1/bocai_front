import React from 'react';
import Myteam from './myTeam';
import styles from './index.module.scss';
function Team(props) {
  return (
    <div className={styles.team}>
      <Myteam />
    </div>
  );
}

export default Team;
