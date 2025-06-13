"use client";

import { useSearchParams } from "next/navigation";
import CustomerTableAction from "./customer-table-action";
import { useAppSelector } from "@/lib/hooks";
import { PAGE_SIZE } from "@/lib/constants";
import { useFilterName } from "@/lib/context/FilterNameContext";

function levelColor(value: string) {
  switch (value) {
    case "Warga":
      return "from-sitrus to-tangerine";
    case "Juragan":
      return "from-ocean to-ocean-500";
    case "Sultan":
      return "from-leaf to-leaf-500";
    case "Konglomerat":
      return "from-orchid to-veronica";
  }
}

function levelBg(value: string) {
  switch (value) {
    case "Warga":
      return "bg-secondary-50";
    case "Juragan":
      return "bg-ocean-50";
    case "Sultan":
      return "bg-leaf-50";
    case "Konglomerat":
      return "bg-veronica-50";
  }
}

const CustomerTableRow = () => {
  const searchParams = useSearchParams();
  const customers = useAppSelector((state) => state.customers.customer);
  const { name } = useFilterName();
  const currentPage = Number(searchParams.get("page")) || 1;
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;
  const filteredCustomers = customers
    ?.slice(from, to)
    .filter((customer) => customer.name.toLowerCase().includes(name ?? ""));

  if (!filteredCustomers) return <div className="">There is no customer.</div>;
  return (
    <tr className="text-dark w-full flex flex-col text-sm">
      {filteredCustomers.map((customer) => (
        <td
          key={customer.id}
          className=" grid grid-cols-5 p-2.5 items-center w-full"
        >
          <p className=" w-full p-2.5">{customer.name}</p>
          <div
            className={`py-2 px-6 w-fit rounded-sm ${levelBg(customer.level)}`}
          >
            <p
              className={`text-center text-transparent bg-clip-text bg-linear-[135deg] ${levelColor(
                customer.level
              )}`}
            >
              {customer.level}
            </p>
          </div>
          <p className="p-2.5">{customer.favMenu}</p>
          <p className=" p-2.5">IDR {customer.totalTransaction}</p>
          <CustomerTableAction customerId={customer.id} />
        </td>
      ))}
    </tr>
  );
};

export default CustomerTableRow;
