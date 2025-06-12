import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";

const tableHeadList = [
  {
    name: "Customer Name",
  },
  {
    name: "Level",
  },
  {
    name: "Favorite Menu",
  },
  {
    name: "Total Transaction",
  },
  {
    name: "Action",
  },
];

const CustomerTableHead = () => {
  return (
    <tr className="text-sm  grid grid-cols-5 items-center w-full bg-neutral-50">
      {tableHeadList.map((item) => (
        <th
          key={item.name}
          className="p-[10px] flex items-center w-full font-medium justify-between"
        >
          <span>{item.name}</span>
          {item.name !== "Action" && <ArrowUpDown />}
        </th>
      ))}
    </tr>
  );
};

export default CustomerTableHead;

const ArrowUpDown = () => {
  return (
    <div className="flex flex-col text-mud ">
      <ArrowUp2 size={9} />
      <ArrowDown2 size={9} />
    </div>
  );
};
