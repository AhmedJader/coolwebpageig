"use client";
import DecryptedText from "../../../DecryptedText/DecryptedText";
import React from "react";

const textanim = () => {
  return (
    <div>
      {/* Example 2: Customized speed and characters */}
      <div className="items-center justify-center flex flex-col">
      <DecryptedText
        text="Hover on me"
        speed={100}
        maxIterations={20}
        characters="abcdefghijklmnopqrstuvwxyz"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
      </div>

      {/* Example 3: Animate on view (runs once) */}
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          speed={100}
          text="This text animates when in view "
          animateOn="view"
          revealDirection="center"
        />
      </div>
    </div>
  );
};

export default textanim;
