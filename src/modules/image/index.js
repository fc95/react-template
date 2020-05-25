import React, { useState } from 'react';
import { Flex } from 'antd-mobile';
import styles from './index.less';

const ImageHolder = ({ content }) => {
  return (
    <div className={styles.imageHolder}>
      {content}
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

const ImagesContainer = () => {
  const [images, setImages] = useState([]);

  const handleImageAdd = () => {
    const content = images.length + 1;
    setImages([...images, content]);
  };

  return (
    <Flex wrap="wrap" justify="start">
      {
        images.map((image, index) => {
          return <ImageHolder key={index} content={image} className="inline" />
        })
      }
      <ImagePlaceHolder add={handleImageAdd} />
    </Flex>
  )
};

export default ImagesContainer;