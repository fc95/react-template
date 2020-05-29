import React, { useState } from 'react';
import { Flex, Modal } from 'antd-mobile';
import styles from './index.less';

const ImageHolder = props => {
  return (
    <div className={styles.imageHolder}
      style={{ backgroundColor: props.content }}
      onClick={props.add}
    >
    </div>
  )
};

const ImagePlaceHolder = props => {
  return (
    <div className={styles.imageHolder}
      onClick={props.add}
    >
      +
    </div>
  )
};

const closest = (el, selector) => {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

const onWrapTouchStart = e => {
  // fix touch to scroll background page on iOS
  if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    return;
  }
  const pNode = closest(e.target, '.am-modal-content');
  if (!pNode) {
    e.preventDefault();
  }
}

/* eslint-disable no-unused-vars */
const colors = Array.from(new Array(20), _ => `#${Math.random().toString(16).slice(2, 8)}`);

const ImagesContainer = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleImageAdd = e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    setVisible(true);
  };

  const handleImageSelect = color => {
    const _selectedImages = [...selectedImages];
    const index = selectedImages.indexOf(color);
    if (index > -1) {
      _selectedImages.splice(index, 1)
    } else {
      _selectedImages.push(color);
    }
    setSelectedImages(_selectedImages);
  };

  const handleSave = () => {
    setVisible(false);
    setImages([...selectedImages]);
  };

  return (
    <div className={styles.container}>
      <Flex wrap="wrap" justify="start">
        {
          images.map((image, index) => {
            return <ImageHolder key={index} content={image} add={handleImageAdd} />
          })
        }
        {
          images.length === 0 && (<ImagePlaceHolder add={handleImageAdd} />)
        }
      </Flex>
      <Modal
        visible={visible}
        transparent
        maskClosable={false}
        onClose={() => { }}
        style={{ width: '50%' }}
        footer={[{ text: '确定', onPress: handleSave }]}
        wrapProps={{ onTouchStart: onWrapTouchStart }}
      >
        <div style={{ height: '50vh', overflow: 'auto' }}>
          <Flex wrap="wrap" justify="start" align="center">
            {
              colors.map((color, index) => {
                const style = {
                  backgroundColor: color,
                };
                return (
                  <div key={index}
                    className={`${styles.imageTumb} ${selectedImages.includes(color) ? styles.active : ''}`}
                    style={style}
                    onClick={() => handleImageSelect(color)}
                  >
                  </div>
                )
              })
            }
          </Flex>
        </div>
      </Modal>
    </div>
  )
};

export default ImagesContainer;