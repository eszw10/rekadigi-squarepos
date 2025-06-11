"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const customerLinks = [
  {
    name: "Customer",
    href: "/customer",
  },
  {
    name: "Promo",
    href: "/customer/promo",
  },
  {
    name: "Voucher",
    href: "/customer/voucher",
  },
];

const CustomerNavigation = () => {
  const pathname = usePathname();
  return (
    <section className="flex justify-between border-b border-fence">
      <div className="">
        <h2 className="text-2xl font-bold">Customer</h2>
        <p className="text-sm text-mud font-medium mt-1 mb-4">
          You can manage and organize your customer and other things here
        </p>
      </div>
      <nav className="text-sm font-semibold text-mud flex items-end gap-2">
        {customerLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={clsx("py-3 w-[198px] text-center", {
              "text-iris-100 border-b-2 border-iris-100":
                pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default CustomerNavigation;
