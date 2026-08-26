import React, { useState } from 'react';

function App() {
    // 1. กำหนดข้อมูลรูปภาพและคำบรรยายสำหรับ 2 สถานะ
    const image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG_fdDHR2eVLJtijyxJWPMvuB_EpwGhuccPq07bZxKw&s=10';
    const caption1 = 'Iron Man';

    const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7CaJR8JPEzsbRiyxEYAHUzDRZlNlTNDTu0ymWqDSOQ&s=10';
    const caption2 = 'Spiderman';

    // 2. สร้าง State แยกกัน 2 ตัว (สำหรับ Image และ Caption)
    const [image, setImage] = useState(image1);
    const [caption, setCaption] = useState(caption1);

    // 3. ฟังก์ชันสลับทั้งรูปและคำบรรยายพร้อมกัน
    const toggle = () => {
        if (image === image1) {
            setImage(image2);
            setCaption(caption2);
        } else {
            setImage(image1);
            setCaption(caption1);
        }
    };

    // 4. ส่วนการแสดงผลตามโครงสร้างที่โจทย์กำหนด
    return ( <
        div style = {
            { textAlign: 'center', marginTop: '50px' }
        } > { /* Display the current image */ } <
        img src = { image }
        alt = "Toggle"
        style = {
            {
                width: '50%',
                maxWidth: '500px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px'
            }
        }
        /> { / * Display the current caption * / } <
        p style = {
            { fontSize: '18px', fontWeight: 'bold', marginTop: '15px' }
        } > { caption } < /p> { / * Button to toggle the image and caption * / } <
        button onClick = { toggle }
        style = {
            { marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }
        } >
        Toggle <
        /button> < /
        div >
    );
}

export default App;