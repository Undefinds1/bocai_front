import React from 'react';
import styles from './index.module.scss';
import MyAccount from './myAccount';
import MyTeam from './myTeam';
function Home(props) {
  return (
    <div className={styles.home}>
      <MyAccount />
      <MyTeam />
    </div>
  );
}

export default Home;
