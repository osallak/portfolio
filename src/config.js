import { default as React } from "react";
import { ReactComponent as AboutImage } from "./assets/about.svg";
import AboutMeIcon from "./assets/about_me_icon.svg";
import ContactIcon from "./assets/contact_icon.svg";
import { ReactComponent as ContactImage } from "./assets/contact_image.svg";
import { ReactComponent as DownloadIcon } from "./assets/download_icon.svg";
import FacebookLogo from "./assets/facebook_logo.svg";
import { ReactComponent as HeroImage } from "./assets/hero.svg";
import HomeIcon from "./assets/home_icon.svg";
import InstagramLogo from "./assets/instagram_logo.svg";
import SendIconForToast, {
  ReactComponent as SendIcon,
} from "./assets/send_icon.svg";

export const CONFIG = {
  design: [
    { name: "SaulDesign", url: "https://www.youtube.com/@SaulDesign08" },
  ],

  socialMedia: [
    {
      name: "Facebook",
      url: "https://google.com",
      icon: FacebookLogo,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/uss4ma.0",
      icon: InstagramLogo,
    },
  ],

  logo: [
    {
      name: "Oussama Sallak",
      url: "#home",
    },
  ],
  hero: [
    {
      first_line: "SOFTWARE",
      main_line: "ENGINEER",
      image: <HeroImage />,
      primary_button: "Hire me",
      primary_button_url: "#contact",
      primary_button_icon: "",
      secondary_button: "Download CV",
      secondary_button_url: "assets/resume.pdf",
      secondary_button_icon: <DownloadIcon />,
      show_arrow_doodle: true,
    },
  ],
  about: [
    {
      first_text: "About",
      second_text: "me",
      paragraph_lines_to_show: "7",
      paragraph:
        "A dedicated and knowledgeable software engineer with 2 years of experience. Proficient in multiple programming languages and familiar with the software development lifecycle. Committed to writing clean, efficient code while continually learning new technologies. Has good problem-solving and strong teamwork skills and aims to make a positive impact in the industry. A quick learner with the ability to adapt to new technologies and methodologies.",
      image: <AboutImage />,
      button_text: {
        more: "Read More",
        less: "Show Less",
      },
      show_doodles: true,
    },
  ],
  projects: [
    {
      first_text: "My recent",
      second_text: "works",
      tabs: [
        {
          id: 1,
          title: "General",
          project_detail: [
            {
              id: 1,
              name: "SpinShot",
              image:
                "",
              url: "https://github.com/osallak/SpinShot",
            },
            {
              id: 2,
              name: "Inception",
              image:
                "",
              url: "https://github.com/osallak/inception",
            },
            {
              id: 3,
              name: "IRC",
              image:
                "",
              url: "https://github.com/osallak/ft_irc",
            },
          ],
        },
      ],
    },
  ],
  contact: [
    {
      first_text: "Got a problem to",
      second_text: "solve?",
      name_label: "Your Name",
      name_placeholder: "Oussama Sallak",
      email_label: "Your Email",
      email_placeholder: "oussamasallak1@gmail.com",
      message_label: "Your Message",
      message_placeholder: "Hey! Want to hire you...",
      send_button_text: "Send Message",
      send_button_icon: <SendIcon />,
      toast_icon: SendIconForToast,
      contact_image: <ContactImage />,
      show_doodles: true,
    },
  ],
  footer: [
    {
      showNavLinks: true,
      showSocialMedia: true,
      footerText: "Terms of Service - Privacy Policy",
    },
  ],
  navLinks: [
    {
      name: "Home",
      url: "#home",
      icon: HomeIcon,
    },
    {
      name: "About Me",
      url: "#about",
      icon: AboutMeIcon,
    },
    {
      name: "Contact",
      url: "#contact",
      icon: ContactIcon,
    },
  ],
};
