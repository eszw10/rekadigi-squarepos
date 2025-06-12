import CustomerTableHead from "./customer-table-head";
import CustomerTableRow from "./customer-table-row";

const CustomerTable = () => {
  return (
    <table className="flex flex-col gap-3">
      <thead>
        <CustomerTableHead />
      </thead>
      <tbody>
        <CustomerTableRow />
      </tbody>
    </table>
  );
};

export default CustomerTable;
