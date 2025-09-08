import React from "react";
import { motion } from "framer-motion";

const Navigation = ({ mobile = false }) => {
  return (
    <ul className={`flex ${mobile ? "flex-col space-y-3 text-base" : "space-x-6"}`}>
      {["Home", "About", "Work", "Contact"].map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${mobile ? "border-b border-white/10" : ""}`}
        >
          <motion.a
            href={`#${item.toLowerCase()}`}
            className="relative block py-2 font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
            <motion.span
              className="absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

export default Navigation;