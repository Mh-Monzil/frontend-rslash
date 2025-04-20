// import Footer from "@/components/shared/Ui/Footer/Footer";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
