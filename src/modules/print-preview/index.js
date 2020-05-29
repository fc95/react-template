import React, { useEffect } from 'react';
import { Modal } from 'antd-mobile';
import styles from './index.less';

/* eslint-disable no-unused-vars */
const colors = Array.from(new Array(20), _ => `#${Math.random().toString(16).slice(2, 8)}`);

const PrintPreview = props => {
  useEffect(() => {

  }, [])
  return (
    <Modal
      className={styles.printPreview}
      visible={props.visible}
      transparent
      maskClosable={false}
      onClose={() => { }}
      style={{ width: '100%' }}
      footer={[]}
    >
      <div id="print-preview" className={styles.previewPageWrap}>
        <div className={styles.previewPage}>
          <div className={styles.previewPageThumb}>
            <div>
              <div style={{
                display: 'flex',
                textAlign: 'left',
              }}
              >
                <div style={{
                  flex: 1,
                  textAlign: 'left',
                }}
                >
                  姓名：AA
                </div>
                <div style={{
                  flex: 1,
                  textAlign: 'left',
                }}
                >
                  姓名：AA
                </div>
                <div style={{
                  flex: 1,
                  textAlign: 'left',
                }}
                >
                  姓名：AA
                </div>
              </div>
              <div style={{
                display: 'flex',
                textAlign: 'left',
              }}
              >
                <div style={{
                  flex: 1,
                  textAlign: 'left',
                }}
                >
                  姓名：AA
                </div>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div style={{
                display: 'flex',
                textAlign: 'left',
              }}
              >
                <span>测量一</span>
                <span>30mm*40mm*50mm</span>
              </div>
              <div style={{
                display: 'flex',
                textAlign: 'left',
              }}
              >
                <span>测量二</span>
                <span>30mm*40mm*50mm</span>
              </div>
              <div style={{
                display: 'flex',
                textAlign: 'left',
              }}
              >
                <span>测量三</span>
                <span>30mm*40mm*50mm</span>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
            >
              {
                colors.map((color, index) => {
                  const style = {
                    backgroundColor: color,
                  };
                  return (
                    <div key={index}
                      className={styles.imageCell}
                      style={style}
                    >
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/* <div className={styles.previewPage}></div>
          <div className={styles.previewPage}></div>
          <div className={styles.previewPage}></div> */}
      </div>
    </Modal>
  )
}

export default PrintPreview;