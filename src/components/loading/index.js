import React from 'react';
import { Icon } from 'antd-mobile';
import styles from './index.less';

const Loading = () => {
  return (
    <div className="am-popover-mask">
      <div className={styles.loading}>
        <Icon type="loading" size="lg" color="red" />
      </div>
    </div>
  )
};

export default Loading;