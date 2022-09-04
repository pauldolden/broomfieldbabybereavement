import type { NavItem } from "@models/NavItem";

interface HeaderLinks {
  nav: NavItem[];
  find: NavItem;
}

// Header Navigation Links
export const HEADER_LINKS: HeaderLinks = {
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
    { label: "Resources", href: "/resources" },
  ],
  find: { label: "Where to find us", href: "#find" },
};

// Footer Navigation Links
export const FOOTER_LINKS: NavItem[][] = [
  [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
  ],
  [
    { label: "Contact", href: "#contact" },
    { label: "Resources", href: "/resources" },
    { label: "Where to find us", href: "#find" },
  ],
];
