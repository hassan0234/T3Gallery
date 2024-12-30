import TopNav from "./_components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default Layout;
