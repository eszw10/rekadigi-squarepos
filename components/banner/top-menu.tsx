import Image from "next/image";

const topMenuList = [
  {
    id: 1,
    name: "Nasi Goreng Jamur Special Resto Pak Min",
  },
  {
    id: 2,
    name: "Tongseng Sapi Gurih",
  },
  {
    id: 3,
    name: "Nasi Gudeg Telur Ceker",
  },
  {
    id: 4,
    name: "Nasi Ayam serundeng",
  },
  {
    id: 5,
    name: "Nasi Goreng Seafood",
  },
];

const TopMenu = () => {
  return (
    <div className="grow bg-neutral-50 rounded pt-4 text-xs text-mud ">
      <section className="px-4 flex flex-col gap-3">
        <h3 className="font-bold text-2xl text-dark w-3/5">
          Top Menu <span className="text-secondary">This Week</span>
        </h3>
        <p className="font-medium">10 - 12 Agustus 2023</p>
        <ol className="font-semibold flex flex-col gap-2">
          {topMenuList.map((item) => {
            return item.id === 1 ? (
              <div
                key={item.id}
                className="bg-white rounded-lg p-[10px] text-sm font-bold text-dark shadow-topMenu relative"
              >
                <p className="w-3/4 inline-block">{item.name}</p>
                <div className="h-6 w-6 shadow-topNumber text-center bg-secondary text-white absolute z-10 -top-[7px] right-2 rotate-[8deg]">
                  {item.id}
                </div>
              </div>
            ) : (
              <li key={item.id} className="p-[10px]">
                {item.id}. {item.name}
              </li>
            );
          })}
        </ol>
      </section>
      <Image
        src={"/topmenu-vector.svg"}
        alt={"vector"}
        width={0}
        height={0}
        priority
        className={"w-full"}
      />
    </div>
  );
};

export default TopMenu;
