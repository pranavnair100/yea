"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const { width, height } = useWindowSize();

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true); // Show the new page first
    setTimeout(() => {
      setShowConfetti(true); // Start confetti after the new page appears
      setTimeout(() => setShowConfetti(false), 8000); // Stop confetti after 8 seconds
    }, 100); // Delay to ensure the new page renders before confetti starts
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "I'll buy you some Taco Bell",
      "Pretty please",
      "But :*(",
      "PLEASE BRO",
      "Yep, I'm dead",
      "Ight, you're talking to my ghost",
      ":(((",
      "Estoy muerto",
      "No :("
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="min-h-screen min-w-screen bg-pink-500 flex flex-col items-center justify-center">
      {/* Confetti */}
      {showConfetti && <Confetti width={width} height={height} />}

      {yesPressed ? (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Add multiple images or GIFs here */}
            {[
              "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif", // Another direct Tenor GIF
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`valentine-${index}`}
                className="w-[200px] rounded-md shadow-md"
              />
            ))}
          </div>
          <div className="my-4 text-4xl font-bold text-white">
            I LOVE YOU THANK YOU FOR BEING MY VALENTINE FOR THE THIRD TIME!!!!
          </div>
          <div className="mt-4">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
