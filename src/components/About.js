import React, { useState } from 'react'

export default function About() {
    const [myStyle,setMyStyle] =useState({
        color: "black",
        backgroundColor: "white"
    }
    )
    const [btnText,setBtnText] =useState("Enable Dark Mode")

    const darkModeClick = () => {
        if(myStyle.color === '#212529'){
            setMyStyle({
                color : "white",
                backgroundColor : "#212529"
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color : "#212529",
                backgroundColor : "white"
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
   <>
   <div className="container" style={myStyle}>
   <h1 className="my-3">About Us</h1>
   <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
      About Us - Welcome to TextUtils!

At TextUtils, we believe that words have the power to inspire, inform, and connect. Our mission is to provide you with a seamless and efficient way to enhance your text, making it more impactful and engaging. Whether you're a student, a professional, a writer, or anyone who works with text, our app is designed to elevate your content and make your communication shine.
      </div>
    </div>
  </div>
    </div>
<button type="button" className="btn btn-dark my-3" onClick={darkModeClick}>{btnText}</button>
</div>
   </>
  )
}
