import CustomerNavigation from "@/components/customer/customer-navigation";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 flex flex-col h-full">
      <CustomerNavigation />
      <main className="grow">{children}</main>
    </div>
  );
};

export default CustomerLayout;
