type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({children, ...props}) => (
    <button className="border border-gray-300 text-white bg-neutral-600 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline" {...props}>
      {children}
    </button>
);

export default Button;