import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import HomeIcon from "@mui/icons-material/Home";
import { ProjectType } from "../types/types";

export const MenuItems = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Sport", to: "/sport", icon: SportsGymnasticsIcon },
  { name: "About Me", to: "/about-me", icon: InfoIcon },
  { name: "Contact", to: "/contact", icon: AlternateEmailIcon },
];

export const projects: ProjectType[] = [
  {
    title: "Underwater Image Processing Project",
    videos: [{ order: 1, url: "video1.mp4" }],
    descriptions: [{ order: 2, content: "This is a description for the project." }],
    images: [
      { order: 3, url: "thumbnail1.png" },
      { order: 4, url: "additional-image1.png" },
    ],
  },
  {
    title: "Project 2",
    videos: [{ order: 2, url: "video2.mp4" }],
    descriptions: [{ order: 1, content: "Description for Project 2." }],
    images: [
      { order: 1, url: "thumbnail2.png" },
      { order: 3, url: "additional-image2.png" },
    ],
  },
];
