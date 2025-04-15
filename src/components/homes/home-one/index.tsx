import HeaderOne from "@/layouts/headers/HeaderOne";
import Banner from "./Banner";
import IntroArea from "./IntroArea";
import Blog from "./Blog";
import Footer from "@/layouts/footers/Footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne style={"style_2"} />
      <Banner />
      <IntroArea />
      <Blog />
      <Footer />
    </>
  );
};

export default HomeOne;
