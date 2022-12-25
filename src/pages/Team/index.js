import React from 'react';
import Myteam from './myTeam';
import MyLink from './myLink';
import styles from './index.module.scss';
function Team(props) {
  return (
    <div className={styles.team}>
      <Myteam />
      <MyLink />
    </div>
  );
}

export default Team;
