import React from 'react';
import styles from './index.module.scss';
import MyAccount from './myAccount';
import MyTeam from './myTeam';
import CooperateSite from './cooperateSite';
function Home(props) {
  return (
    <div className={styles.home}>
      <MyAccount />
      <MyTeam />
      <CooperateSite />
    </div>
  );
}

export default Home;
