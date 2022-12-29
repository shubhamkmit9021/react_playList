import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["experts", "Creative", "result-getters", "visionaries", "experts"],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </>
  );
};
