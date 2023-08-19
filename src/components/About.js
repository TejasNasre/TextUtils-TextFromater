import React, { useState } from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'rgba(33,37,41)',
    backgroundColor: props.mode === 'dark'?'rgba(33,37,41)':'white'

  }

  return (
   <>
   <div className="container my-5 p-4" style={myStyle}>
   <h1 className="my-3">About Us</h1>
   <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
     Welcome to TextUtils!

At TextUtils, we believe that words have the power to inspire, inform, and connect. Our mission is to provide you with a seamless and efficient way to enhance your text, making it more impactful and engaging. Whether you're a student, a professional, a writer, or anyone who works with text, our app is designed to elevate your content and make your communication shine.
      </div>
    </div>
  </div>
    </div>
</div>
   </>
  )
}
