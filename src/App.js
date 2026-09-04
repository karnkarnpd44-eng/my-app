import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
    const [image, setImage] = useState('https://imgflip.com/s/meme/Mocking-Spongebob.jpg');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    // State สำหรับปรับแต่งข้อความ
    const [fontFamily, setFontFamily] = useState('Impact');
    const [fontSize, setFontSize] = useState(32);
    const [textColor, setTextColor] = useState('#ffffff');
    const [textAlign, setTextAlign] = useState('center');
    const [opacity, setOpacity] = useState(1);
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [strokeWidth, setStrokeWidth] = useState(2);

    // ฟีเจอร์ที่ 1: อัปโหลดรูปภาพ
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    // ฟีเจอร์ที่ 3: บันทึก/ดาวน์โหลดมีม
    const handleGenerateMeme = () => {
        const memeElement = document.getElementById('meme-preview');
        if (memeElement) {
            html2canvas(memeElement, { useCORS: true }).then((canvas) => {
                const link = document.createElement('a');
                link.download = 'meme.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    };

    const handleReset = () => {
        setText1('');
        setText2('');
        setFontFamily('Impact');
        setFontSize(32);
        setTextColor('#ffffff');
        setTextAlign('center');
        setOpacity(1);
        setStrokeColor('#000000');
        setStrokeWidth(2);
    };

    // รวม Style สำหรับข้อความ
    const textStyle = {
        fontFamily: fontFamily,
        fontSize: `${fontSize}px`,
        color: textColor,
        textAlign: textAlign,
        opacity: opacity,
        WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
        textStroke: `${strokeWidth}px ${strokeColor}`,
    };

    return ( <
        div className = "meme-container" > { /* ฝั่งซ้าย: พรีวิวมีม */ } <
        div className = "preview-section" >
        <
        div className = "toolbar-top" >
        <
        button type = "button" > Spacing < /button> <
        button type = "button" > Add Image < /button> <
        button type = "button" > Draw < /button> <
        /div>

        <
        div id = "meme-preview"
        className = "meme-box" >
        <
        img src = { image }
        alt = "Meme template" / >
        <
        h2 className = "meme-text top-text"
        style = { textStyle } > { text1 } <
        /h2> <
        h2 className = "meme-text bottom-text"
        style = { textStyle } > { text2 } <
        /h2> <
        /div> <
        /div>

        { /* ฝั่งขวา: แผงควบคุม (Control Panel) */ } <
        div className = "control-section" >
        <
        div className = "upload-btn-wrapper" >
        <
        label htmlFor = "file-upload"
        className = "btn-upload" >
        Upload new template <
        /label> <
        input id = "file-upload"
        type = "file"
        accept = "image/*"
        onChange = { handleImageUpload }
        /> <
        /div>

        <
        h3 > Mocking Spongebob < /h3>

        { /* ฟีเจอร์ที่ 2: ข้อความซ้อนทับ */ } <
        div className = "input-group" >
        <
        input type = "text"
        placeholder = "Text #1"
        value = { text1 }
        onChange = {
            (e) => setText1(e.target.value) }
        /> <
        /div>

        <
        div className = "input-group" >
        <
        input type = "text"
        placeholder = "Text #2"
        value = { text2 }
        onChange = {
            (e) => setText2(e.target.value) }
        /> <
        /div>

        { /* ฟีเจอร์ตกแต่งข้อความเพิ่มเติม */ } <
        div className = "text-customization"
        style = {
            { textAlign: 'left', marginTop: '15px' } } >
        <
        h4 > Text Settings < /h4>

        { /* แบบอักษร */ } <
        div className = "input-group" >
        <
        label > Font Family: < /label> <
        select value = { fontFamily }
        onChange = {
            (e) => setFontFamily(e.target.value) } >
        <
        option value = "Impact" > Impact < /option> <
        option value = "Arial" > Arial < /option> <
        option value = "Comic Sans MS" > Comic Sans MS < /option> <
        option value = "Tahoma" > Tahoma < /option> <
        option value = "Courier New" > Courier New < /option> <
        /select> <
        /div>

        { /* ขนาดอักษร */ } <
        div className = "input-group" >
        <
        label > Font Size({ fontSize }
            px): < /label> <
        input type = "range"
        min = "16"
        max = "72"
        value = { fontSize }
        onChange = {
            (e) => setFontSize(e.target.value) }
        /> <
        /div>

        { /* สีข้อความ */ } <
        div className = "input-group" >
        <
        label > Text Color: < /label> <
        input type = "color"
        value = { textColor }
        onChange = {
            (e) => setTextColor(e.target.value) }
        /> <
        /div>

        { /* การจัดแนว */ } <
        div className = "input-group" >
        <
        label > Text Align: < /label> <
        select value = { textAlign }
        onChange = {
            (e) => setTextAlign(e.target.value) } >
        <
        option value = "left" > Left < /option> <
        option value = "center" > Center < /option> <
        option value = "right" > Right < /option> <
        /select> <
        /div>

        { /* ความโปร่งใส */ } <
        div className = "input-group" >
        <
        label > Opacity({ opacity }): < /label> <
        input type = "range"
        min = "0.1"
        max = "1"
        step = "0.1"
        value = { opacity }
        onChange = {
            (e) => setOpacity(e.target.value) }
        /> <
        /div>

        { /* สีเส้นขอบ */ } <
        div className = "input-group" >
        <
        label > Stroke Color: < /label> <
        input type = "color"
        value = { strokeColor }
        onChange = {
            (e) => setStrokeColor(e.target.value) }
        /> <
        /div>

        { /* ขนาดเส้นขอบ */ } <
        div className = "input-group" >
        <
        label > Stroke Width({ strokeWidth }
            px): < /label> <
        input type = "range"
        min = "0"
        max = "10"
        value = { strokeWidth }
        onChange = {
            (e) => setStrokeWidth(e.target.value) }
        /> <
        /div> <
        /div>

        <
        div className = "action-buttons"
        style = {
            { marginTop: '20px' } } >
        <
        button className = "btn-generate"
        onClick = { handleGenerateMeme } >
        Generate Meme <
        /button> <
        button className = "btn-reset"
        onClick = { handleReset } >
        Reset <
        /button> <
        /div> <
        /div> <
        /div>
    );
}

export default App;