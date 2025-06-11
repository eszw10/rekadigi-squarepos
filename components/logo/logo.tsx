import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-[9px]">
      <Image src="/icon.png" alt="Logo" width={18} height={25} priority />
      <span className="text-iris-100 font-semibold text-3xl">Square</span>
    </div>
  );
};

export default Logo;
