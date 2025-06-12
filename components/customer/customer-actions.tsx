import { Add, Filter, Printer, Refresh, SearchNormal } from "iconsax-reactjs";
import Image from "next/image";

const CustomerActions = () => {
  return (
    <div className="p-3 bg-iris-100 rounded-lg text-white relative overflow-hidden">
      <Image
        src={"/doteffect.png"}
        alt={"effect"}
        width={1192}
        height={167}
        className="absolute top-0 left-0 z-30"
      />
      <Image
        src={"/banner.png"}
        alt={"banner"}
        width={183}
        height={100}
        quality={100}
        className="absolute top-0 right-0 h-full w-1/2 object-cover z-"
      />
      <h3 className="font-bold text-xl">Customer</h3>
      <p className="text-xs max-w-[341px] mt-2 leading-[200%]">
        On this menu you will be able to create, edit, and also delete the
        customer. Also you can manage it easily.
      </p>
      <section className="text-sm font-semibold flex items-center gap-4 mt-4">
        <button className="bg-iris py-3 px-4 rounded-lg flex items-center gap-1 backdrop-blur-[10px]">
          <Add size={16} />
          <span>Add New Customer</span>
        </button>
        <search className="flex grow items-center gap-4 px-2 py-1 bg-white rounded-lg z-10">
          <SearchNormal
            variant="TwoTone"
            size={16}
            className="text-placeholder"
          />
          <input
            type="text"
            placeholder="Search Customer"
            className=" text-dark focus:outline-none placeholder:text-placeholder placeholder:leading-[150%] text-xs font-medium grow"
          />
          <button className="bg-iris py-2 px-4 rounded-lg">Search</button>
        </search>
        <button className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2">
          <Filter size={16} variant="TwoTone" />
          <span>Filter</span>
        </button>
        <button className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2">
          <Refresh size={16} variant="TwoTone" />
          <span>Refresh</span>
        </button>
        <button className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2">
          <Printer size={16} variant="TwoTone" />
        </button>
      </section>
    </div>
  );
};

export default CustomerActions;
