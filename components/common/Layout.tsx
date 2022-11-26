import Footer from "./footer/Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
