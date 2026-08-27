import React, { useState } from 'react';

function App() {
    const image1 = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80';
    const caption1 = 'หมาแดง';

    const image2 = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80';
    const caption2 = 'แมวลายวัว';

    const [image, setImage] = useState(image1);
    const [caption, setCaption] = useState(caption1);

    const toggle = () => {
        if (image === image1) {
            setImage(image2);
            setCaption(caption2);
        } else {
            setImage(image1);
            setCaption(caption1);
        }
    };

    return ( <
        div style = {
            { textAlign: 'center', marginTop: '50px' }
        } > { /* Display the current image */ } <
        img src = { image }
        alt = "Toggle"
        style = {
            { width: '50%', maxWidth: '500px', height: '300px', objectFit: 'cover', borderRadius: '8px' }
        }
        />

        { /* Display the current caption */ } <
        p style = {
            { fontSize: '18px', fontWeight: 'bold', marginTop: '15px' }
        } > { caption } < /p>

        { /* Button to toggle the image and caption */ } <
        div >
        <
        button onClick = { toggle }
        style = {
            { marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }
        } >
        Toggle <
        /button> < /
        div > <
        /div>
    );
}

export default App;