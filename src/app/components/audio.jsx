'use client'; // Ensure this is a Client Component

// Function to handle audio playback
export default function handlePlayAudio() {
  const audio = new Audio("/buttonintro.mp3");
  audio.play().catch((err) => {
    console.error("Audio playback failed:", err);
  });
}