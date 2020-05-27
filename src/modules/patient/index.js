import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './index.less';

const Item = Flex.Item;

const PatientInfo = () => {
  console.log(useIntl().formatMessage({ id: 'patient.name' }));
  return (
    <div className={styles.container}>
      <Flex>
        <Item>
          <div className={styles.item}>
            <label><FormattedMessage id="patient.name" />：</label>
            <span>王山</span>
          </div>
        </Item>
        <Item>
          <div className={styles.item}>
            <label><FormattedMessage id="patient.age" />：</label>
            <span>18</span>
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