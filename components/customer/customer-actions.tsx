"use client";

import { useFilterName } from "@/lib/context/FilterNameContext";
import { Add, Filter, Printer, Refresh, SearchNormal } from "iconsax-reactjs";
import Link from "next/link";

const CustomerActions = () => {
  const { name, setName } = useFilterName();

  return (
    <section className="text-sm font-semibold flex items-center gap-4 mt-4 ">
      <Link
        href={"/customer/create"}
        className="bg-iris py-3 px-4 rounded-lg flex items-center gap-1 backdrop-blur-[10px] z-30"
      >
        <Add size={16} />
        <span>Add New Customer</span>
      </Link>
      <search className="flex grow items-center gap-4 px-2 py-1 bg-white rounded-lg z-30">
        <SearchNormal
          variant="TwoTone"
          size={16}
          className="text-placeholder"
        />
        <input
          type="text"
          placeholder="Search Customer"
          className=" text-dark focus:outline-none placeholder:text-placeholder placeholder:leading-[150%] text-xs font-medium grow"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-iris py-2 px-4 rounded-lg">Search</button>
      </search>
      <button className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2 z-30">
        <Filter size={16} variant="TwoTone" />
        <span>Filter</span>
      </button>
      <Link
        href={"/customer"}
        className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2 z-30"
      >
        <Refresh size={16} variant="TwoTone" />
        <span>Refresh</span>
      </Link>
      <button className="py-3 px-4 rounded-lg bg-white/20 backdrop-blur-[10px] flex items-center gap-2 z-30">
        <Printer size={16} variant="TwoTone" />
      </button>
    </section>
  );
};

export default CustomerActions;
