interface ErrorProps {
  text?: string;
}

const ErrorMsg: React.FC<ErrorProps> = ({text}) => {
  return (
    <>
    <p className="text-red-500">
      {text}
    </p>
    </>
  );
};

export default ErrorMsg; 