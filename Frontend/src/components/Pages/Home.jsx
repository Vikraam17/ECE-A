import React from "react";
import Name from '../Name'
const Home = () => {
  const userData = {
    fname: "vikraam",
    lname: "v",
    phn: "9876543210",
  };
  return (
    <div>
      <Name {...userData} />
      
      <Name fname={userData.fname} lname={userData.lname} phn={userData.phn} />
    </div>
  );
};

export default Home;
