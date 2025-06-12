import { customers } from "@/data/customers";
import { Edit2, ShieldSearch, Trash } from "iconsax-reactjs";

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
  return (
    <tr className="text-dark w-full flex flex-col text-sm">
      {customers.map((customer) => (
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
          <div className=" px-2.5 flex items-center gap-4 ">
            <div className="flex items-center gap-2 py-2 px-4 bg-neutral-50 rounded-sm">
              <ShieldSearch size={12} variant="TwoTone" />
              <span>Detail</span>
            </div>
            <div className="py-[8.5px] px-3 bg-neutral-50 rounded-sm">
              <Edit2 variant="TwoTone" size={12} />
            </div>
            <div className="bg-error-100 py-[8.5px] px-3 rounded-sm">
              <Trash variant="TwoTone" className="text-error-300" size={12} />
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
};

export default CustomerTableRow;
