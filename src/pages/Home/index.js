import React from 'react';
import styles from './index.module.scss';
import MyAccount from './myAccount';
import MyTeam from './myTeam';
import CooperateSite from './cooperateSite';
import Share from './share';
function Home(props) {
  return (
    <div className={styles.home}>
      <MyAccount />
      <MyTeam />
      <CooperateSite />
      <Share />
    </div>
  );
}

export default Home;
