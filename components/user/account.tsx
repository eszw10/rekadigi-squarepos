import Image from "next/image";

const Account = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"/user.png"}
        alt={"user"}
        width={36}
        height={36}
        priority
        className="rounded-full h-8 w-8"
      />
      <div className="">
        <p className="font-semibold text-sm text-dark">Savannah N</p>
        <p className="text-mud text-[10px] w-full">Food Quality Manager</p>
      </div>
    </div>
  );
};

export default Account;
