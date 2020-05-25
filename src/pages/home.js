import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, List, InputItem } from 'antd-mobile';

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

const PlaceHolder = () => {
  return (
    <div style={{
      width: '30vw',
      height: '30vw',
      marginTop: '1.5vw',
      marginLeft: '2.5vw',
      backgroundColor: 'gray'
    }}
    >
    </div>
  )
};

export default function Home() {
  const patient = useSelector(state => state.patient);

  console.log(patient);

  return (
    <div>
      <List>
        <InputItem>
          姓名
        </InputItem>
        <InputItem>
          性别
        </InputItem>
        <InputItem
          type="number"
        >
          年龄
        </InputItem>
        <InputItem
          placeholder="*** **** ****"
          type="phone"
          onChange={v => console.log(v)}
        >
          电话
        </InputItem>
      </List>
      <Flex wrap="wrap" justify="start">
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
        <PlaceHolder className="inline" />
      </Flex>
    </div>
  );
}