import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Logo Wrapper with subtle float */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow Background */}
        <motion.div
          className="absolute  bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Your White H Logo */}
        <img
          src="/logo.png" // put your white H image in public folder and name it H.png
          alt="H Logo"
          className="w-[60rem] object-contain relative z-10"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
