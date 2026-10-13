import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const SHARED = {
  name: "Monsif Souri",
  initials: "SM",
  url: "https://somoncef.me",
  location: "Casablanca, Morocco",
  locationLink: "",
  avatarUrl: "/me3.png",
  contact: {
    email: "somoncef@gmail.com",
    tel: "+212 688167585",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/somoncef",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/monsif-souri",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/souri_moncef",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  navbar: [
    { href: "/", icon: HomeIcon },
    { href: "/blog", icon: NotebookIcon },
  ],
} as const;
