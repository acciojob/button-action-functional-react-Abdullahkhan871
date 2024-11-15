import React, { useState } from "react";

const BtnClick = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button id="click" onClick={()=> setToggle(!toggle)}>Click</button>
      {toggle == true ? (
        <p id="para ">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default BtnClick;
