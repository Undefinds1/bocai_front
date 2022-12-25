import React from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className="footerLink">
        <Button type="link">关于我们</Button>
        <Button type="link">网站首页</Button>
        <Button type="link">《条件与规则》</Button>
        <Button type="link">意见反馈</Button>
        <Button type="link">联系我们</Button>
        <Button type="link">加入我们</Button>
      </div>
      <div>© 2009-2023 xxxxxx.com 版权所有 ICP证：B2-20080101</div>
    </div>
  );
}

export default Footer;
