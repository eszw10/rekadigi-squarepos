"use client";

import { Edit2, ShieldSearch, Trash } from "iconsax-reactjs";
import { deleteCustomer } from "@/lib/customerSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";

const CustomerTableAction = ({ customerId }: { customerId: number }) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" px-2.5 flex items-center gap-4 ">
      <div className="flex items-center gap-2 py-2 px-4 bg-neutral-50 rounded-sm">
        <ShieldSearch size={12} variant="TwoTone" />
        <span>Detail</span>
      </div>
      <Link
        href={`/customer/edit/${customerId}`}
        className="py-[8.5px] px-3 bg-neutral-50 rounded-sm"
      >
        <Edit2 variant="TwoTone" size={12} />
      </Link>
      <button
        className="bg-error-100 py-[8.5px] px-3 rounded-sm cursor-pointer hover:bg-red-100 transition-colors duration-300"
        onClick={() => dispatch(deleteCustomer(customerId))}
      >
        <Trash variant="TwoTone" className="text-error-300" size={12} />
      </button>
    </div>
  );
};

export default CustomerTableAction;
