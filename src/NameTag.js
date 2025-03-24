import React from "react";

const NameTag = (props) => {
  const deleteByIndex = () => props.removeName(props.index);
  // The "removeName" method/function is then passed down to the event listener (down below via "OnClick" event listener) in your NameTag component that calls your removeName method
  return (
    <div className="name-tag">
      <h3 className="title">HELLO</h3>
      <p className="subtitle">my name is</p>
      <h2 className="name">{props.name}</h2>
      <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
    </div>
  );
};

// "OnClick" is considered the EVENT LISTENER

export default NameTag;
