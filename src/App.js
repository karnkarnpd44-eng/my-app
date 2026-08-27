import React, { useState } from 'react';
import './App.css';

function App() {
    // Stateสำหรับเก็บข้อมูลจากฟอร์ม
    const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg');
    const [watermarkText, setWatermarkText] = useState('Meeooo');
    const [textSize, setTextSize] = useState(80);
    const [textColor, setTextColor] = useState('#ff9999');
    const [textPosition, setTextPosition] = useState('center');

    // 1. เพิ่ม State ตามโจทย์ข้อ 1 และ 2
    const [imageWidth, setImageWidth] = useState(600); // ความกว้างรูปภาพ (px)
    const [textBgColor, setTextBgColor] = useState('rgba(0, 0, 0, 0.5)'); // สีพื้นหลังข้อความ

    // คำนวณตำแหน่งลายน้ำตามที่เลือกใน Dropdown
    const getPositionStyle = () => {
        switch (textPosition) {
            case 'top-left':
                return { top: '20px', left: '20px' };
            case 'top-right':
                return { top: '20px', right: '20px' };
            case 'bottom-left':
                return { bottom: '20px', left: '20px' };
            case 'bottom-right':
                return { bottom: '20px', right: '20px' };
            case 'center':
            default:
                return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
        }
    };

    return ( <
        div style = {
            { textAlign: 'center', padding: '20px' }
        } >
        <
        h2 > Image Watermark Generator < /h2>

        { /* ฟอร์มกรอกข้อมูล */ } <
        div style = {
            { display: 'inline-block', textAlign: 'right', marginBottom: '20px' }
        } >
        <
        div >
        <
        label > Image URL: < /label> <
        input type = "text"
        value = { imageUrl }
        onChange = {
            (e) => setImageUrl(e.target.value)
        }
        /> < /
        div > <
        div >
        <
        label > Watermark Text: < /label> <
        input type = "text"
        value = { watermarkText }
        onChange = {
            (e) => setWatermarkText(e.target.value)
        }
        /> < /
        div > <
        div >
        <
        label > Text Size(px): < /label> <
        input type = "number"
        value = { textSize }
        onChange = {
            (e) => setTextSize(e.target.value)
        }
        /> < /
        div > <
        div >
        <
        label > Text Color: < /label> <
        input type = "color"
        value = { textColor }
        onChange = {
            (e) => setTextColor(e.target.value)
        }
        /> < /
        div >

        { /* เพิ่มช่องป้อน สีพื้นหลังข้อความ (ข้อ 2 ตามโจทย์) */ } <
        div >
        <
        label > Text Background Color: < /label> <
        input type = "color"
        value = { textBgColor }
        onChange = {
            (e) => setTextBgColor(e.target.value)
        }
        /> < /
        div >

        { /* เพิ่มช่องป้อน ความกว้างของรูปภาพ (ข้อ 1 ตามโจทย์) */ } <
        div >
        <
        label > Image Width(px): < /label> <
        input type = "number"
        value = { imageWidth }
        onChange = {
            (e) => setImageWidth(e.target.value)
        }
        /> < /
        div >

        <
        div >
        <
        label > Text Position: < /label> <
        select value = { textPosition }
        onChange = {
            (e) => setTextPosition(e.target.value)
        } >
        <
        option value = "top-left" > top - left < /option> <
        option value = "top-right" > top - right < /option> <
        option value = "bottom-left" > bottom - left < /option> <
        option value = "bottom-right" > bottom - right < /option> <
        option value = "center" > (Center) < /option> < /
        select > <
        /div> < /
        div >

        { /* ส่วนแสดงผลรูปภาพและลายน้ำ */ } <
        div className = "image-container"
        style = {
            { width: `${imageWidth}px`, margin: '0 auto' }
        } >
        <
        img src = { imageUrl }
        alt = "Watermarked"
        style = {
            { width: '100%', display: 'block' }
        }
        />

        <
        div className = "watermark-text"
        style = {
            {
                ...getPositionStyle(),
                    fontSize: `${textSize}px`,
                    color: textColor,
                    backgroundColor: textBgColor, // ใช้สีพื้นหลังที่เลือกจาก State
            }
        } > { watermarkText } <
        /div> < /
        div > <
        /div>
    );
}

export default App;