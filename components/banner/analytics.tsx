import Image from "next/image";

const AnalyticsBanner = () => {
  return (
    <div className="flex flex-col h-[265px] bg-iris-100 rounded-lg text-white text-xl p-4 relative overflow-hidden">
      <Image
        src={"/wave.svg"}
        alt={"vector"}
        width={259}
        height={97}
        className="absolute -top-8 left-0"
      />
      <Image
        src={"/wave-bloom.svg"}
        alt={"vector"}
        width={259}
        height={97}
        className="absolute -top-8 left-0"
      />
      <p className="w-3/4">See analytics of the Customer Clearly</p>
      <button className="bg-iris rounded-lg py-3 px-4 mt-auto self-start z-10 text-sm backdrop-blur-[10px]">
        See Analytics
      </button>
      <div className="h-[323px] w-[323px] rounded-full absolute border border-iris top-[108px] left-[88px]"></div>
      <div className="h-[323px] w-[323px] rounded-full absolute border bg-iris border-white top-[140px] left-[128px]"></div>
      <div className="h-[323px] w-[323px] rounded-full absolute border bg-iris-60 border-neutral-100 top-[176px] left-[172px]"></div>
    </div>
  );
};

export default AnalyticsBanner;
