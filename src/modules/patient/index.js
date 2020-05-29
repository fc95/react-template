import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import styles from './index.less';

const Item = Flex.Item;

const PatientInfo = () => {
  const patient = useSelector(state => state.patient);
  console.log(patient);

  return (
    <div className={styles.container}>
      <Flex>
        <Item>
          <div className={styles.item}>
            <label><FormattedMessage id="patient.name" />：</label>
            <span>{patient.name}</span>
          </div>
        </Item>
        <Item>
          <div className={styles.item}>
            <label>ID：</label>
            <span>{patient.id}</span>
          </div>
        </Item>
        <Item>
          <div className={styles.item}>
            <label><FormattedMessage id="patient.age" />：</label>
            <span>{patient.age}</span>
          </div>
        </Item>
      </Flex>
      <WhiteSpace />
      <Flex>
        <Item>
          <div className={styles.item}>
            <label>性别：</label>
            <span>{patient.sex}</span>
          </div>
        </Item>
      </Flex>
    </div>
  )
};

export default PatientInfo;