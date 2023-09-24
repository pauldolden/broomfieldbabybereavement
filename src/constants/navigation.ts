import type { NavItem } from "@models/NavItem";

interface HeaderLinks {
  nav: NavItem[];
  find: NavItem;
}

// Header Navigation Links
export const HEADER_LINKS: HeaderLinks = {
  nav: [
    { label: "Home", href: "/#header" },
    { label: "About Us", href: "/#about" },
    { label: "Events", href: "/events" },
    { label: "Resources", href: "/resources" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/#contact" },
  ],
  find: { label: "Where to find us", href: "#find" },
};

// Footer Navigation Links
export const FOOTER_LINKS: NavItem[][] = [
  [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
  ],
  [
    { label: "Contact", href: "/#contact" },
    { label: "Resources", href: "/resources" },
    { label: "Where to find us", href: "/#find" },
    { label: "Testimonials", href: "/testimonials" },
  ],
];
