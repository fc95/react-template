import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import styles from './index.less';

const Item = Flex.Item;

const PatientInfo = () => {
  return (
    <div className={styles.container}>
      <Flex>
        <Item>
          <div className={styles.item}>
            <label>姓名：</label>
            <span>王山</span>
          </div>
        </Item>
        <Item>
          <div className={styles.item}>
            <label>姓名：</label>
            <span>王山</span>
          </div>
        </Item>
        <Item>
          <div className={styles.item}>
            <label>姓名：</label>
            <span>王山</span>
          </div>
        </Item>
      </Flex>
      <WhiteSpace />
      <Flex>
        <Item>
          <div className={styles.item}>
            <label>姓名：</label>
            <span>王山</span>
          </div>
        </Item>
      </Flex>
    </div>
  )
};

export default PatientInfo;