import React from "react";
import "./style.css";
import {useNavigate} from "react-router-dom";

function MainButton({ text, type, inputRef,id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (type==="nav"){
      return console.log(inputRef.current.value);

    }else{return navigate(`/movies/${id}`);}
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      type="button"
      id="main-btn"
    >
      {text}
    </button>
  );
}

export default MainButton;
