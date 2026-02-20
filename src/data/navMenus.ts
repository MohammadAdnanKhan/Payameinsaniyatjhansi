import { INavItem } from "@/types/types";
import {
  faHome,
  faUser,
  faUsers,        
  faCalendarAlt,   
  faNewspaper,     
  faDonate,        
  faEnvelope,
  faInfoCircle, 
  faHouse    
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: faHouse ,
  },
  {
    name: "AboutUs",
    link: "/#about",
    icon: faInfoCircle,
  },

  {
    name: "News",
    link: "/news",
    icon: faNewspaper,
  },
  {
    name: "Donate",
    link: "/donate",
    icon: faDonate,
  },
  {
    name: "Team",
    link: "/team",
    icon: faUsers,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
