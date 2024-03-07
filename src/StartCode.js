import React from "react";
import "./App.css"
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function StartCode(){

    return(
        <>
            <div style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + 'https://c4.wallpaperflare.com/wallpaper/432/132/968/depth-of-field-tennis-balls-lens-flare-sunlight-wallpaper-preview.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:"cover",
                height:'100vh'
            }}>
                <Header />
                <Form />
                <Footer />

            </div>
        </>
    )
}

export default StartCode
