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
} from "./MenuIcons.jsx"; // <-- import your SVG icons here

const SocialIcons = () => {
  const icons = [
    { Icon: TelegramIcon, link: "https://t.me/yourusername" },
    { Icon: YouTubeIcon, link: "https://youtube.com/@yourchannel" },
    { Icon: WhatsAppIcon, link: "https://wa.me/yourphonenumber" },
    { Icon: InstagramIcon, link: "https://instagram.com/yourprofile" },
    { Icon: MailIcon, link: "mailto:yourmail@gmail.com" },
    { Icon: GitHubIcon, link: "https://github.com/yourusername" },
    { Icon: GeeksforGeeksIcon, link: "https://auth.geeksforgeeks.org/user/yourprofile" },
    { Icon: LeetCodeIcon, link: "https://leetcode.com/yourusername" },
  ];

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-5 z-50">
      {icons.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <Icon className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
