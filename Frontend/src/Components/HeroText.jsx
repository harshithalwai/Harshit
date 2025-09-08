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

  return (
    <motion.div 
      className="z-10 mt-20 text-center md:mt-40 md:text-left"
      style={{
        transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
      }}
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex px-5 sm:px-10 lg:px-15">
        <motion.h1
          className="text-4xl font-medium text-white"
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
            className="text-5xl font-medium text-gray-300"
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
            <FlipWords
              words={words}
              className="font-black text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
          >
            Web Solutions
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2, type: "spring", stiffness: 100 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#3B82F6",
                color: "#FFFFFF"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden px-5">
        <motion.p
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I'm Harshit
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-gray-300"
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
            <FlipWords
              words={words}
              className="font-bold text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-gray-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            Web Applications
          </motion.p>
        </div>
        
        <motion.div
          className="flex flex-col gap-4 mt-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
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