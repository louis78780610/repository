import Content from "../../Molecules/TopPage/Content";
import images from "../../../images/bg_image.jpg";

const TopPageContext = () => {
  return(
    <>
    <div className="bg-cover bg-center h-screen flex justify-end items-center pr-80 md:p-0 md:pt-40 sm:pt-40 sm:p-0 lg:pl-80" style={{backgroundImage: `url(${images}`}}>
    <Content/>
    </div>
    </>
  );
};

export default TopPageContext;