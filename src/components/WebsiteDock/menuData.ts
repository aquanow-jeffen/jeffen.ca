import HomeIcon from "./icons/home.svg";
import WritingIcon from "./icons/writing.svg";
import ProjectIcon from "./icons/project.svg";
import PhotoIcon from "./icons/photo.svg";
import ResumeIcon from "./icons/resume.svg";
import GithubIcon from "./icons/github.svg";
import EmailIcon from "./icons/email.svg";
import MoonIcon from "./icons/moon.svg";
import LinkedinIcon from "./icons/linkedin.svg";

interface Link {
  type: "link";
  name: string;
  route: string;
  centerX: number;
  Icon: React.ComponentType;
  elRef?: Element;
}

interface DividerItem {
  type: "divider";
  centerX: number;
  elRef?: Element;
}

const menuData: Array<Link | DividerItem> = [
  {
    type: "link",
    name: "Home",
    route: "/",
    Icon: HomeIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Writing",
    route: "/writing",
    Icon: WritingIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Projects",
    route: "/project",
    Icon: ProjectIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Photos",
    route: "/photo",
    Icon: PhotoIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Resume",
    route: "/resume",
    Icon: ResumeIcon,
    centerX: 0,
  },
  { type: "divider", centerX: 0 },
  {
    type: "link",
    name: "Linkedin",
    route: "https://www.linkedin.com/in/jeffenc/",
    Icon: LinkedinIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Github",
    route: "https://github.com/Jeffen",
    Icon: GithubIcon,
    centerX: 0,
  },
  {
    type: "link",
    name: "Email",
    route: "mailto:chenjeffen@gmail.com",
    Icon: EmailIcon,
    centerX: 0,
  },
  { type: "divider", centerX: 0 },
  {
    type: "link",
    name: "Theme",
    route: "/theme",
    Icon: MoonIcon,
    centerX: 0,
  },
];

export default menuData;
