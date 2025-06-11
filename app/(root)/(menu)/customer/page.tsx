import AnalyticsBanner from "@/components/banner/analytics";
import TopMenu from "@/components/banner/top-menu";
import CustomerActions from "@/components/customer/customer-actions";
import CustomerTable from "@/components/customer/customer-table";
import Pagination from "@/components/pagination";

const CusTomerPage = () => {
  return (
    <div className="h-full grid md:grid-cols-[1fr_272px] gap-4 text-mud font-semibold pt-4">
      <section className="flex flex-col">
        <CustomerActions />
        <CustomerTable />
        <div className="bg-neutral-50 rounded py-2 px-3 flex items-center justify-between mt-auto">
          <p className="text-base">Showing 10 Data Customers</p>
          <Pagination />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <AnalyticsBanner />
        <TopMenu />
      </section>
    </div>
  );
};

export default CusTomerPage;
