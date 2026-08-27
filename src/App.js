import React, { useState } from 'react';
import './App.css';

function App() {
    const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg');
    const [watermarkText, setWatermarkText] = useState('Meeoooo');
    const [textSize, setTextSize] = useState(50); // ค่าเริ่มต้นขนาดฟอนต์
    const [textColor, setTextColor] = useState('#ff7b7b');
    const [textBgColor, setTextBgColor] = useState('#c3b036');
    const [bgOpacity, setBgOpacity] = useState(0.5); // Slider ความโปร่งแสง
    const [textPosition, setTextPosition] = useState('top-left');

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

    // แปลงค่า Hex Color + Opacity เป็น RGBA
    const hexToRgba = (hex, opacity) => {
        let c = hex.replace('#', '');
        if (c.length === 3) {
            c = c.split('').map(char => char + char).join('');
        }
        const r = parseInt(c.substring(0, 2), 16) || 0;
        const g = parseInt(c.substring(2, 4), 16) || 0;
        const b = parseInt(c.substring(4, 6), 16) || 0;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return ( <
        div className = "container mt-4" >
        <
        h2 className = "mb-4" > Watermark Generator < /h2>

        { /* ใช้ Bootstrap Grid ตามโจทย์ */ } <
        div className = "row" > { /* ฝั่งซ้าย: ฟอร์มควบคุม */ } <
        div className = "col-md-5" >
        <
        div className = "form-group mb-3" >
        <
        label > Image URL: < /label> <
        input type = "text"
        className = "form-control"
        value = { imageUrl }
        onChange = {
            (e) => setImageUrl(e.target.value) }
        /> <
        /div>

        <
        div className = "form-group mb-3" >
        <
        label > Watermark Text: < /label> <
        input type = "text"
        className = "form-control"
        value = { watermarkText }
        onChange = {
            (e) => setWatermarkText(e.target.value) }
        /> <
        /div>

        { /* เปลี่ยน Text Size จาก number ให้เป็น Slider (range) ตามโจทย์ 5.6 */ } <
        div className = "form-group mb-3" >
        <
        label > Text Size: { textSize } < /label> <
        input type = "range"
        className = "form-range"
        min = "10"
        max = "150"
        value = { textSize }
        onChange = {
            (e) => setTextSize(e.target.value) }
        /> <
        /div>

        <
        div className = "form-group mb-3" >
        <
        label > Text Color: < /label> <
        input type = "color"
        className = "form-control form-control-color w-100"
        value = { textColor }
        onChange = {
            (e) => setTextColor(e.target.value) }
        /> <
        /div>

        <
        div className = "form-group mb-3" >
        <
        label > Text Background Color: < /label> <
        input type = "color"
        className = "form-control form-control-color w-100"
        value = { textBgColor }
        onChange = {
            (e) => setTextBgColor(e.target.value) }
        /> <
        /div>

        { /* Slider Background Opacity */ } <
        div className = "form-group mb-3" >
        <
        label > Background Opacity: < /label> <
        input type = "range"
        className = "form-range"
        min = "0"
        max = "1"
        step = "0.01"
        value = { bgOpacity }
        onChange = {
            (e) => setBgOpacity(e.target.value) }
        /> <
        /div>

        <
        div className = "form-group mb-3" >
        <
        label > Text Position: < /label> <
        select className = "form-select"
        value = { textPosition }
        onChange = {
            (e) => setTextPosition(e.target.value) } >
        <
        option value = "top-left" > Top Left < /option> <
        option value = "top-right" > Top Right < /option> <
        option value = "bottom-left" > Bottom Left < /option> <
        option value = "bottom-right" > Bottom Right < /option> <
        option value = "center" > Center < /option> <
        /select> <
        /div> <
        /div>

        { /* ฝั่งขวา: การแสดงผลรูปภาพและลายน้ำ */ } <
        div className = "col-md-7" >
        <
        div className = "image-container position-relative overflow-hidden d-inline-block" >
        <
        img src = { imageUrl }
        alt = "Preview"
        className = "img-fluid" / >

        <
        div className = "watermark-text position-absolute"
        style = {
            {
                ...getPositionStyle(),
                    fontSize: `${textSize}px`,
                    color: textColor,
                    backgroundColor: hexToRgba(textBgColor, bgOpacity),
                    padding: '5px 15px',
                    whiteSpace: 'nowrap'
            }
        } >
        { watermarkText } <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default App;