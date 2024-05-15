interface TitleProps {
  title: string;
}

const Title:React.FC<TitleProps> = ({title}) => {
  return(
    <h1 className='flex items-center justify-center text-4xl md:text-2x-l sm:text-2xl sm:w-full'>
      {title}
    </h1>
  );
};

export default Title;