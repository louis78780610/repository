import Content from "../../Molecules/TopPage/Content";
import images from "../../../images/bg_image.jpg";

const TopPageContext = () => {
  return (
    <div 
      className="bg-cover bg-center h-screen flex justify-end items-center xl:pr-80 2xl:pr-80 lg:pr-40 md:justify-center md:p-0 md:pt-40 sm:pt-0 sm:p-14 sm:justify-center" 
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Content />
    </div>
  );
};

export default TopPageContext;
