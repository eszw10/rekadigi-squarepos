import {
  BatteryFull,
  Candle,
  Category2,
  Document,
  MouseSquare,
  Profile2User,
  Reserve,
  ShoppingCart,
  Truck,
  UserSquare,
} from "iconsax-reactjs";

// Menu
export const menuLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: <Category2 size={14} variant="TwoTone" />,
  },
  {
    name: "Stock",
    href: "/stock",
    icon: <BatteryFull size={14} variant="TwoTone" />,
  },
  {
    name: "Customer",
    href: "/customer",
    icon: <Profile2User size={14} variant="Bulk" />,
  },
  {
    name: "Restaurant",
    href: "/restaurant",
    icon: <Reserve size={14} variant="TwoTone" />,
  },
  {
    name: "Design",
    href: "/design",
    icon: <MouseSquare size={14} variant="TwoTone" />,
  },
  {
    name: "Report",
    href: "/report",
    icon: <Document size={14} />,
  },
  {
    name: "Role & Admin",
    href: "/role",
    icon: <UserSquare size={14} variant="TwoTone" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Candle size={14} variant="TwoTone" />,
  },
];

// Integration
export const integrationLinks = [
  {
    name: "Stock",
    href: "/integrationStock",
    icon: <ShoppingCart size={14} variant="TwoTone" />,
  },
  {
    name: "Supply",
    href: "/supply",
    icon: <Truck size={14} variant="TwoTone" />,
  },
];
