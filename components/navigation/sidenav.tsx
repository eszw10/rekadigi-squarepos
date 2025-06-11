import { LogoutCurve } from "iconsax-reactjs";
import Logo from "../logo/logo";
import Account from "../user/account";
import NavLinks from "./nav-links";
import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="py-6 border-r border-gray-400/30 flex flex-col  h-screen">
      <div className="ps-6 flex flex-col gap-6">
        <Logo />
        <NavLinks />
      </div>
      <div className="mt-auto flex flex-col items-center justify-center gap-6">
        <Account />
        <Link
          href="/"
          className="flex gap-2 items-center text-xs font-semibold text-error"
        >
          <LogoutCurve size={16} variant="Bulk" color="var(--color-error)" />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
