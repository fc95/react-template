import React, { useState } from 'react';
// import html2Canvas from 'html2canvas';
import { TextareaItem, Button } from 'antd-mobile';
// import JsPDF from 'jspdf';
import PatientInfo from '../modules/patient';
import ImagesContainer from '../modules/image';
import PrintPreview from '../modules/print-preview';
import styles from './index.less';
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

// const download = () => {
//   html2Canvas(document.getElementById('report'), {
//     backgroundColor: '#000',
//     logging: false,
//     y: 45
//   }).then(function (canvas) {
//     console.log(canvas);
//     const contentWidth = canvas.width;
//     const contentHeight = canvas.height;

//     console.log(contentWidth, contentHeight);
//     // 一页pdf显示html页面生成的canvas高度;
//     const pageHeight = contentWidth / 592.28 * 841.89;
//     // 未生成pdf的html页面高度
//     let leftHeight = contentHeight;
//     // 页面偏移
//     let position = 0;
//     // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
//     const imgWidth = 595.28;
//     const imgHeight = 592.28 / contentWidth * contentHeight;

//     const pageData = canvas.toDataURL('image/jpeg', 1.0);

//     const pdf = new JsPDF('', 'pt', 'a4');

//     // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
//     // 当内容未超过pdf一页显示的范围，无需分页
//     if (leftHeight < pageHeight) {
//       pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//     } else {
//       while (leftHeight > 0) {
//         pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//         leftHeight -= pageHeight;
//         position -= 841.89;
//         // 避免添加空白页
//         if (leftHeight > 0) {
//           pdf.addPage();
//         }
//       }
//     }

//     pdf.output('dataurlnewwindow')
//     // console.log(pdf.output('dataurlnewwindow'));
//     // location.href = pdf.output('bloburl');
//     // pdf.save('report.pdf')
//   });
// };

export default function Home() {
  const [visible, setVisible] = useState(false);

  const handlePrintPreview = () => {
    setVisible(true);
  };

  return (
    <>
      <div id="report">
        <PatientInfo />
        <ImagesContainer />
        <TextareaItem
          className={styles.description}
          placeholder="请输入"
          rows={5}
        />
      </div>
      <PrintPreview visible={visible} />
      <div className={styles.operations}>
        {/* <Button type="primary" onClick={download} inline style={{ marginRight: '10px' }}>
          PDF预览
        </Button> */}
        <Button style={{ display: 'none' }} type="primary" inline onClick={handlePrintPreview}>
          打印预览
        </Button>
      </div>
    </>
  );
}