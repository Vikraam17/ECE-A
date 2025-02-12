import React from "react";

const Name = (props) => {
  return (
    <>
      <h1>Name : {props.fname}</h1>
      <h1>Last Name: {props.lname}</h1>
      <h1>Phone no: {props.phn}</h1>
    </>
  );
};

export default Name;
