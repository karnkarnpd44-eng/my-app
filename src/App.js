import React, { useState } from 'react';

function App() {
    const image1 =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7CaJR8JPEzsbRiyxEYAHUzDRZlNlTNDTu0ymWqDSOQ&s=10';

    const image2 =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG_fdDHR2eVLJtijyxJWPMvuB_EpwGhuccPq07bZxKw&s=10';

    const [image, setImage] = useState(image1);

    const toggleImage = () => {
        if (image === image1) {
            setImage(image2);
        } else {
            setImage(image1);
        }
    };

    return ( <
        div style = {
            { textAlign: 'center', marginTop: '50px' } } > { /* Display the current image */ } <
        img src = { image }
        alt = "Toggle"
        style = {
            {
                width: '300px', // กำหนดความกว้างคงที่
                height: '300px', // กำหนดความสูงคงที่ (ให้ภาพเท่ากันเป๊ะ)
                objectFit: 'cover', // ช่วยตัดขอบภาพอัตโนมัติ ไม่ให้ภาพสเกลเบี้ยว
                borderRadius: '8px' // (แถม) ใส่ขอบมนให้ดูสวยงาม
            }
        }
        />

        { /* Button to toggle the image */ } <
        div >
        <
        button onClick = { toggleImage }
        style = {
            { marginTop: '20px' } } >
        Toggle Image <
        /button> <
        /div> <
        /div>
    );
}

export default App;