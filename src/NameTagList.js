import React from "react";
import NameTag from "./NameTag.js";
import "./styles.css";

const NameTagList = (props) => {
  const renderNameTag = (name, index) => (
    <NameTag
      name={name}
      key={name}
      removeName={props.removeName}
      // props "removeName" are used to pass a reference to your removeName method in the NameTagList component
      index={index}
    />
  );
  const NameTagElements = props.names.map(renderNameTag);
  return <main>{NameTagElements}</main>;
};

export default NameTagList;
