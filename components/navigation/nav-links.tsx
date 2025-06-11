"use client";
import { integrationLinks, menuLinks } from "@/data/links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="text-xs text-mud">
      <p className=" text-[10px] mb-4">Menu</p>
      <div className="flex flex-col gap-3 mb-6">
        {menuLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={clsx("flex gap-3 items-center py-2", {
              "text-iris-100 text-sm font-bold": pathname === link.href,
            })}
          >
            {link.icon}
            <span className="font-semibold">{link.name}</span>
            {link.name === "Dashboard" && (
              <div className="rounded-full h-[18px] w-[18px] bg-linear-[135deg] text-[10px] text-center text-white from-sitrus to-tangerine font-semibold">
                4
              </div>
            )}
          </Link>
        ))}
      </div>
      <p className=" text-[10px] mb-4">Integration</p>
      <div className="flex flex-col gap-3">
        {integrationLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={clsx("flex gap-3 items-center py-2", {
              "text-iris-100 text-sm font-bold": pathname === link.href,
            })}
          >
            {link.icon}
            <span className="font-semibold">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
