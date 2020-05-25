import React from 'react';
import { useSelector } from 'react-redux';
import PatientInfo from '../modules/patient';
import ImagesContainer from '../modules/image';

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

export default function Home() {
  const patient = useSelector(state => state.patient);
  console.log(patient);

  return (
    <div>
      <PatientInfo />
      <ImagesContainer />
    </div>
  );
}