import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable", "Innovative", "Dynamic"];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const resumeLink =
    "https://drive.google.com/file/d/1EA21Cec__PWEEuLnq8DbGGcaUXepxLcC/view?usp=drivesdk";

  return (
    <motion.div
      className="z-10 mt-16 sm:mt-24 md:mt-40 text-center md:text-left px-4 sm:px-8 lg:px-16"
      style={{
        transform: `translate(${mousePosition.x * 5}px, ${
          mousePosition.y * 5
        }px)`,
      }}
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex px-5 sm:px-10 lg:px-20">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, color: "#60A5FA" }}
        >
          Hi I'm Harshit
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            className="my-4"
          >
            <FlipWords words={words} className="font-black text-5xl sm:text-6xl lg:text-8xl" />
          </motion.div>
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
          >
            Web Solutions
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2, type: "spring", stiffness: 100 }}
          >
            {/* Resume button */}
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
              <motion.span
                className="ml-1 text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                ➜
              </motion.span>
            </motion.a>

            <motion.button
              className="px-6 sm:px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3B82F6",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden px-4 sm:px-6">
        <motion.p
          className="text-3xl sm:text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I'm Harshit
        </motion.p>
        <div>
          <motion.p
            className="text-4xl sm:text-5xl font-black text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FlipWords words={words} className="font-bold text-5xl sm:text-6xl" />
          </motion.div>
          <motion.p
            className="text-3xl sm:text-4xl font-black text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Web Applications
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          {/* Resume link */}
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.button
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroText;
