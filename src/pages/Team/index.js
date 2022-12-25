import React from 'react';
import Myteam from './myTeam';
import MyLink from './myLink';
import Premium from './premium';
import Subordinate from './subordinate';
import styles from './index.module.scss';
function Team(props) {
  return (
    <div className={styles.team}>
      <Myteam />
      <MyLink />
      <Premium />
      <Subordinate />
    </div>
  );
}

export default Team;
