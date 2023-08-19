import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("To Upper Case", "success");
    document.title = 'TextUtils - ToUpperCase';
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("To Lower Case", "success");
    document.title = 'TextUtils - ToLowerCase'
  };
  const clearPanel = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
    document.title = 'TextUtils - Clear'
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy To Clipboard", "success");
    document.title = 'TextUtils - Copy'
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
    document.title = 'TextUtils - RemoveSpace'
  };
  const onChangeee = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2> {props.heading} </h2>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={onChangeee}
          ></textarea>
        </div>
        <div className="my-4">
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2"
            onClick={handleUpClick}
          >
            ToUpperCase
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm mx-2"
            onClick={handleLowClick}
          >
            ToLowerCase
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-2"
            onClick={clearPanel}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-warning btn-sm mx-2"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn-info btn-sm mx-2 my-4"
            onClick={handleExtraSpace}
          >
            RemoveSpace
          </button>
        </div>
        <div className="container">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").filter((e) => {return e.length!==0}).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((e) => {return e.length!==0}).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter Something To Preview It"}</p>
        </div>
      </div>
    </>
  );
}
