import React from "react";
import Name from "./components/Name";
const App = () => {
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

export default App;
