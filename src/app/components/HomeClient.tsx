"use client";  // Mark this component as client-side

import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { useSearchParams, useRouter } from "next/navigation"; // Import useSearchParams and useRouter
import HackerText from "../components/hackertext";

const HomeClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get('userName'); // Get userName from the URL query

  const [animationComplete, setAnimationComplete] = useState(false);

  // Handle when the animation completes
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div>
      {!animationComplete ? (
        <HackerText onAnimationComplete={handleAnimationComplete} />
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center h-screen"
          initial={{ opacity: 0 }} // Start with 0 opacity (invisible)
          animate={{ opacity: 1 }} // Animate to full opacity (visible)
          transition={{ duration: 1 }} // Duration of the fade-in animation
        >
          {/* Content you want to show after animation */}
          <h1>Welcome to the actual page content!</h1>
          <p>Good to see you, {userName}!</p> {/* Display the user's name here */}
        </motion.div>
      )}
    </div>
  );
};

export default HomeClient;
