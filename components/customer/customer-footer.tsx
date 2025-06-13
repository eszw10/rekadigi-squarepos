"use client";
import { useAppSelector } from "@/lib/hooks";
import Pagination from "../pagination";
import { PAGE_SIZE } from "@/lib/constants";

const CustomerFooter = () => {
  const customers = useAppSelector((state) => state.customers.customer);
  const totalCustomer = customers.length ?? 0;
  return (
    <div className="bg-neutral-50 rounded py-2 px-3 flex items-center justify-between mt-auto">
      <p className="text-base">
        Showing {customers.length ?? 0} Data Customers
      </p>
      <Pagination totalPages={Math.ceil(totalCustomer / PAGE_SIZE)} />
    </div>
  );
};

export default CustomerFooter;
