import React from "react";
import {
  TelegramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  InstagramIcon,
  MailIcon,
  GitHubIcon,
  GeeksforGeeksIcon,
  LeetCodeIcon,
  LinkedInIcon, 
} from "./MenuIcons.jsx";

const SocialIcons = () => {
  const icons = [
    { Icon: YouTubeIcon, link: "https://www.youtube.com/@Hacked_Coder" },
    { Icon: WhatsAppIcon, link: "https://wa.me/6388163046" },
    { Icon: InstagramIcon, link: "https://instagram.com/harshitgupta1327" },
    { Icon: MailIcon, link: "mailto:harshithalwai001@gmail.com" },
    { Icon: LinkedInIcon, link: "https://in.linkedin.com/in/harshit-gupta-b80329297" },
    { Icon: GitHubIcon, link: "https://github.com/harshithalwai" },
    { Icon: GeeksforGeeksIcon, link: "https://www.geeksforgeeks.org/user/harshithalwai001/" },
    { Icon: LeetCodeIcon, link: "https://leetcode.com/u/harshithalwai001/" },
  ];

  return (
    <div
      className="
        fixed right-3 top-1/2 -translate-y-1/2
        flex flex-col items-center
        space-y-4 md:space-y-5
        z-50
        bg-transparent
      "
    >
      {icons.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-white hover:text-blue-400
            transition-colors duration-300
            transform hover:scale-110
          "
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
