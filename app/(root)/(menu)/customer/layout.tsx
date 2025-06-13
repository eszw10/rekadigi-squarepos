import CustomerNavigation from "@/components/customer/customer-navigation";
import { Suspense } from "react";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6 flex flex-col h-full">
      <CustomerNavigation />
      <main className="grow">
        <Suspense
          fallback={
            <div className="text-center text-iris-100 font semibold text-xl">
              Loading...
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default CustomerLayout;
