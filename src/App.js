import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
    const [image, setImage] = useState('https://imgflip.com/s/meme/Mocking-Spongebob.jpg');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

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
    };

    return ( <
        div className = "meme-container" > { /* ฝั่งซ้าย: พรีวิวมีม */ } <
        div className = "preview-section" >
        <
        div className = "toolbar-top" >
        <
        button type = "button" > Spacing < /button> <
        button type = "button" > Add Image < /button> <
        button type = "button" > Draw < /button> < /
        div >

        <
        div id = "meme-preview"
        className = "meme-box" >
        <
        img src = { image }
        alt = "Meme template" / >
        <
        h2 className = "meme-text top-text" > { text1 } < /h2> <
        h2 className = "meme-text bottom-text" > { text2 } < /h2> < /
        div > <
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
        /> < /
        div >

        <
        h3 > Mocking Spongebob < /h3>

        { /* ฟีเจอร์ที่ 2: ข้อความซ้อนทับ (Text Overlay Inputs) */ } <
        div className = "input-group" >
        <
        input type = "text"
        placeholder = "Text #1"
        value = { text1 }
        onChange = {
            (e) => setText1(e.target.value)
        }
        /> < /
        div >

        <
        div className = "input-group" >
        <
        input type = "text"
        placeholder = "Text #2"
        value = { text2 }
        onChange = {
            (e) => setText2(e.target.value)
        }
        /> < /
        div >

        <
        div className = "action-buttons" >
        <
        button className = "btn-generate"
        onClick = { handleGenerateMeme } >
        Generate Meme <
        /button> <
        button className = "btn-reset"
        onClick = { handleReset } >
        Reset <
        /button> < /
        div > <
        /div> < /
        div >
    );
}

export default App;