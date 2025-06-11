import { LogoutCurve } from "iconsax-reactjs";
import Logo from "../logo/logo";
import Account from "../user/account";
import NavLinks from "./nav-links";
import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="border-r border-fence flex flex-col  h-screen">
      <div className="px-6 mt-6 flex flex-col gap-6">
        <Logo />
        <NavLinks />
      </div>
      <div className="mt-auto border-t py-6 border-fence flex flex-col items-center justify-center gap-6 px-6">
        <Account />
        <Link
          href="/"
          className="flex gap-2 items-center justify-center text-xs w-full font-semibold text-error-500 bg-error-100 rounded-sm py-[9px] px"
        >
          <LogoutCurve
            size={16}
            variant="Bulk"
            color="var(--color-error-500)"
          />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
