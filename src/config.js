import { ReactComponent as HeroImage } from "./assets/hero.svg";
import { ReactComponent as DownloadIcon } from "./assets/download_icon.svg";
import { ReactComponent as AboutImage } from "./assets/about.svg";
import { ReactComponent as SendIcon } from "./assets/send_icon.svg";
import { ReactComponent as ContactImage } from "./assets/contact_image.svg";
import SendIconForToast from "./assets/send_icon.svg";
import HomeIcon from "./assets/home_icon.svg";
import AboutMeIcon from "./assets/about_me_icon.svg";
import ContactIcon from "./assets/contact_icon.svg";
import FacebookLogo from "./assets/facebook_logo.svg";
import InstagramLogo from "./assets/instagram_logo.svg";
import TwitterLogo from "./assets/twitter_logo.svg";
import YoutubeLogo from "./assets/youtube_logo.svg";

export const CONFIG = {
  design: [
    { name: "SaulDesign", url: "https://www.youtube.com/@SaulDesign08" }
  ],

  socialMedia: [
    {
      name: "Facebook",
      url: "https://facebook.com/",
      icon: FacebookLogo
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: InstagramLogo
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: TwitterLogo
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/",
      icon: YoutubeLogo
    }
  ],

  logo: [
    {
      name: "Oussama Sallak",
      url: "#home"
    }
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
      show_arrow_doodle: true
    }
  ],
  about: [
    {
      first_text: "About",
      second_text: "me",
      paragraph_lines_to_show: "7",
      paragraph:
        "Lorem ipsum dolor sit amet. Non exercitationem eligendi sed nulla voluptas aut nisi dolorem qui reprehenderit quis non iusto recusandae eum quia enim. In libero labore in vitae eligendi est aspernatur eaque quo repellendus adipisci aut unde totam qui nisi accusamus. Quo necessitatibus asperiores et consequatur neque sed ullam atque in iure eligendi. Eos repudiandae exercitationem qui distinctio consequatur et ratione galisum et tenetur voluptatem sed quam cumque aut praesentium nostrum qui autem autem. Rem vitae minus ut autem quibusdam eum iusto quis qui omnis quam. Et voluptas quae id omnis aperiam aut necessitatibus veniam. Quo delectus veniam et omnis voluptatem ut amet officia. Ut quidem magnam aut nulla repellat est reprehenderit nisi. Qui voluptas veniam et beatae delectus qui incidunt enim sed voluptas veniam! Vel aspernatur adipisci in galisum adipisci qui maxime expedita qui Quis internos. Sit quis ratione ea iusto nostrum et quaerat accusamus ad dolor nemo. In eligendi nobis sit doloremque libero et perspiciatis adipisci qui minima molestiae vel eius sint ut quibusdam cumque. Qui galisum impedit qui consequatur quas est delectus libero aut totam laboriosam sit perspiciatis fugit aut alias reiciendis. Ut quos eaque ex atque quibusdam eos doloribus expedita qui tempora totam.",
      image: <AboutImage />,
      button_text: {
        more: "Read More",
        less: "Show Less"
      },
      show_doodles: true
    }
  ],
  projects: [
    {
      first_text: "My recent",
      second_text: "works",
      tabs: [
        {
          id: 1,
          title: "UI",
          project_detail: [
            {
              id: 1,
              name: "UI Project 1",
              image:
                "https://clouddevs.com/3dbay/files/preview/960x1152/11632327822enep8xig1rjtp8rt2i2dnyqhdvfusrzfzlia82cquesiplirqc5bjdl0rkij00fuks1yjrgwyutspvswkwdfwajedcfbt5mrkvly.png",
              url:
                "https://bootcamp.uxdesign.cc/creating-design-guidelines-for-your-project-f344ecc4097f"
            },
            {
              id: 2,
              name: "UI Project 2",
              image:
                "https://clouddevs.com/3dbay/files/preview/960x1152/11632327822enep8xig1rjtp8rt2i2dnyqhdvfusrzfzlia82cquesiplirqc5bjdl0rkij00fuks1yjrgwyutspvswkwdfwajedcfbt5mrkvly.png",
              url:
                "https://bootcamp.uxdesign.cc/creating-design-guidelines-for-your-project-f344ecc4097f"
            },
            {
              id: 3,
              name: "UI Project 3",
              image:
                "https://clouddevs.com/3dbay/files/preview/960x1152/11632327822enep8xig1rjtp8rt2i2dnyqhdvfusrzfzlia82cquesiplirqc5bjdl0rkij00fuks1yjrgwyutspvswkwdfwajedcfbt5mrkvly.png",
              url:
                "https://bootcamp.uxdesign.cc/creating-design-guidelines-for-your-project-f344ecc4097f"
            },
            {
              id: 4,
              name: "UI Project 4",
              image:
                "https://clouddevs.com/3dbay/files/preview/960x1152/11632327822enep8xig1rjtp8rt2i2dnyqhdvfusrzfzlia82cquesiplirqc5bjdl0rkij00fuks1yjrgwyutspvswkwdfwajedcfbt5mrkvly.png",
              url:
                "https://bootcamp.uxdesign.cc/creating-design-guidelines-for-your-project-f344ecc4097f"
            },
            {
              id: 5,
              name: "UI Project 5",
              image:
                "https://clouddevs.com/3dbay/files/preview/960x1152/11632327822enep8xig1rjtp8rt2i2dnyqhdvfusrzfzlia82cquesiplirqc5bjdl0rkij00fuks1yjrgwyutspvswkwdfwajedcfbt5mrkvly.png",
              url:
                "https://bootcamp.uxdesign.cc/creating-design-guidelines-for-your-project-f344ecc4097f"
            }
          ]
        },
        {
          id: 2,
          title: "UX",
          project_detail: [
            {
              id: 1,
              name: "UX Project 1",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            },
            {
              id: 2,
              name: "UX Project 2",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            },
            {
              id: 3,
              name: "UX Project 3",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            },
            {
              id: 4,
              name: "UX Project 4",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            },
            {
              id: 5,
              name: "UX Project 5",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            },
            {
              id: 6,
              name: "UX Project 6",
              image:
                "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
              url: "https://maze.co/collections/ux-ui-design/ux-examples/"
            }
          ]
        },
        {
          id: 3,
          title: "Web Design",
          project_detail: [
            {
              id: 1,
              name: "Web Design Project 1",
              image:
                "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png",
              url:
                "https://www.interaction-design.org/literature/topics/web-design"
            },
            {
              id: 2,
              name: "Web Design Project 2",
              image:
                "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png",
              url:
                "https://www.interaction-design.org/literature/topics/web-design"
            },
            {
              id: 3,
              name: "Web Design Project 3",
              image:
                "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png",
              url:
                "https://www.interaction-design.org/literature/topics/web-design"
            }
          ]
        }
      ]
    }
  ],
  contact: [
    {
      first_text: "Got a project in",
      second_text: "mind?",
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
      show_doodles: true
    }
  ],
  footer: [
    {
      showNavLinks: true,
      showSocialMedia: true,
      footerText: "Terms of Service - Privacy Policy"
    }
  ],
  navLinks: [
    {
      name: "Home",
      url: "#home",
      icon: HomeIcon
    },
    {
      name: "About Me",
      url: "#about",
      icon: AboutMeIcon
    },
    {
      name: "Contact",
      url: "#contact",
      icon: ContactIcon
    }
  ]
};