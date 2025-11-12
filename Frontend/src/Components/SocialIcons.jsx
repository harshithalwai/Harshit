import React from "react";
import {
  FaTelegramPlane,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const SocialIcons = () => {
  const icons = [
    {
      Icon: FaYoutube,
      link: "https://www.youtube.com/@Hacked_Coder",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      Icon: FaWhatsapp,
      link: "https://wa.me/6388163046",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      Icon: FaInstagram,
      link: "https://instagram.com/harshitgupta1327",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      Icon: FaEnvelope,
      link: "mailto:harshithalwai001@gmail.com",
      label: "Email",
      color: "hover:text-yellow-400",
    },
    {
      Icon: FaLinkedin,
      link: "https://in.linkedin.com/in/harshit-gupta-b80329297",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/harshithalwai",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      Icon: SiGeeksforgeeks,
      link: "https://www.geeksforgeeks.org/user/harshithalwai001/",
      label: "GeeksforGeeks",
      color: "hover:text-green-500",
    },
    {
      Icon: SiLeetcode,
      link: "https://leetcode.com/u/harshithalwai001/",
      label: "LeetCode",
      color: "hover:text-orange-400",
    },
  ];

  return (
    <div
      className="
        fixed right-3 top-1/2 -translate-y-1/2
        flex flex-col items-center
        space-y-4 md:space-y-5
        z-50 bg-transparent
      "
    >
      {icons.map(({ Icon, link, label, color }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`
            text-white transition-all duration-300
            transform hover:scale-110
            ${color}
          `}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
