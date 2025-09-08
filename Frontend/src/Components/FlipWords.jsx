import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 1.1,
          rotateX: 90,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className={`inline-block relative text-left bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
        key={currentWord}
      >
        {currentWord.split("").map((letter, letterIndex) => (
          <motion.span
            key={currentWord + letterIndex}
            initial={{ opacity: 0, y: 20, rotateY: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              delay: letterIndex * 0.08,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-block"
            whileHover={{ scale: 1.1, color: "#60A5FA" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};