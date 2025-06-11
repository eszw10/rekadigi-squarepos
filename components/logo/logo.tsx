import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-[9px]">
      <Image src="/icon.png" alt="Logo" width={18} height={25} priority />
      <span className="text-iris-100 font-semibold text-3xl">Square</span>
    </Link>
  );
};

export default Logo;
