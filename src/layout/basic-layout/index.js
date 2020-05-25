import React, { useState } from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';
import styles from './index.css';
import { useLocation, useHistory } from 'react-router-dom';

const Item = Popover.Item;

const BasicLayout = props => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();
  const histroy = useHistory();
  const currentRoute = (props.routes || []).find(item => item.path === pathname);

  return (
    <div className={styles.basicLayout}>
      <div className={styles.pageHeader}>
        <NavBar
          style={{
            backgroundColor: '#000',
            borderBottom: '1px solid #098ded',
          }}
          mode="dark"
          // icon={<Icon type="left" />}
          onLeftClick={() => {
            // console.log(histroy);
            // histroy.goBack();
          }}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={visible}
              overlay={
                (props.routes || []).map((item, i) => {
                  return (<Item key={i} value={item.path}>{item.title}</Item>)
                })
              }
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={visible => {
                setVisible(visible);
              }}
              onSelect={opt => {
                histroy.push(opt.props.value);
                setVisible(false);
              }}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >
          {currentRoute.title}
        </NavBar>
      </div>
      <div className={styles.pageBody}>
        {props.children}
      </div>
      <div className={styles.pageFooter}>
        <div className={styles.footer}>
          Copyright  2020 无锡祥生医疗科技股份有限公司
        </div>
      </div>
    </div>
  )
};

export default BasicLayout