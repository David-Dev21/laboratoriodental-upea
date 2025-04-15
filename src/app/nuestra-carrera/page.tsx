import About from "@/components/homes/home-one/About";
import Team from "@/components/homes/home-one/Team";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Footer from "@/layouts/footers/Footer";

const page = () => {
  return (
    <>
      <HeaderOne style={"style_2"} />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default page;
