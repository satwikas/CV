import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DATA ENTHUSIASTIC",
          "DATA SCIENTIST",
          "DATA ENGINEER",
          "BUSINESS DATA ANALYST",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
