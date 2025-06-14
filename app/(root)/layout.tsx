import SideNav from "@/components/navigation/sidenav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr]">
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
