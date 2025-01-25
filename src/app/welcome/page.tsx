"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Text from "../components/textanim";

const Welcome = () => {
  const router = useRouter();
  const [userName, setUserName] = useState(""); // State to hold the user's name
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  const handleEnter = async () => {
    try {
      // Set the cookie using the API route
      await fetch("/api/set-cookie");
      // Redirect to the main page with the user's name as a query parameter
      router.push(`/?userName=${encodeURIComponent(userName)}`);
    } catch (err) {
      console.error("Failed to set cookie:", err);
    }
  };

  const handlePlayAudio = () => {
    const audio = new Audio("/buttonintro.mp3");
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
  };

  const handlePlayaudio2 = () => {
    const audio = new Audio("/codeonscreen.wav");
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName) {
      setIsNameSubmitted(true);
      handlePlayAudio();
      handleEnter();
      handlePlayaudio2();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold mb-4 text-black">
        <Text />
      </div>

      {/* Text field for name */}
      {!isNameSubmitted ? (
        <form onSubmit={handleNameSubmit} className="mb-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 text-xl border border-gray-300 rounded-lg text-black"
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Enter
          </button>
        </form>
      ) : (
        <div className="text-3xl font-semibold text-black">
          <p>Hello, {userName}!</p>
          <p>Welcome to the page!</p>
        </div>
      )}
    </div>
  );
};

export default Welcome;
