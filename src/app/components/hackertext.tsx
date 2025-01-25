"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DecryptedText from "../../../DecryptedText/DecryptedText";
import hacktext from "../components/hacktextimport";

interface HackerTextProps {
  onAnimationComplete: () => void; // Callback when animation is complete
}

const HackerText: React.FC<HackerTextProps> = ({ onAnimationComplete }) => {
  const textLines = [
    <DecryptedText
      speed={100}
      text={hacktext}
      animateOn="view"
      revealDirection="center"
      infinite={true}
    />
  ];

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {textLines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ y: "100%" }} // Start from the bottom of the screen
          animate={{ y: "-100%" }} // Animate upwards off the screen
          transition={{
            duration: 4, // Total animation time
            repeat: 0, // Loop animation
            ease: 'linear', // Linear easing
          }}
          className="absolute w-full text-center text-green-500 text-xl font-mono"
          style={{ bottom: `${index * 1}vh` }} // Offset starting positions for each line
          onAnimationComplete={onAnimationComplete} // Pass the callback here
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default HackerText;
