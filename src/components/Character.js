// Write your Character component here

import React from "react";

export default function Character(props) {
  const { name } = props.character;
  console.log(props);
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
