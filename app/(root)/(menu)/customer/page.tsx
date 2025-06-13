import AnalyticsBanner from "@/components/banner/analytics";
import TopMenu from "@/components/banner/top-menu";
import CustomerBanner from "@/components/customer/customer-banner";
import CustomerFooter from "@/components/customer/customer-footer";
import CustomerTable from "@/components/customer/table/customer-table";
import FilterNameProvider from "@/lib/context/FilterNameContext";

const CusTomerPage = () => {
  return (
    <div className="h-full grid md:grid-cols-[1fr_272px] gap-4 text-mud font-semibold pt-4">
      <FilterNameProvider>
        <section className="flex flex-col gap-6">
          <CustomerBanner />
          <CustomerTable />
          <CustomerFooter />
        </section>
      </FilterNameProvider>
      <section className="flex flex-col gap-4">
        <AnalyticsBanner />
        <TopMenu />
      </section>
    </div>
  );
};

export default CusTomerPage;
