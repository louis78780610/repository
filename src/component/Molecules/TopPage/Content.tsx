import { Link } from 'react-router-dom';
import Button from "../../Atoms/Button";

const Content = () => {
  return(
    <>
      <div className='pt-8'>
      <h1 className='text-6xl font-serif italic mb-4 text-neutral-700 text-center sm:text-4xl'>Wellcome</h1>
      <div className='flex justify-center p-12 sm:p-4 md:flex md:flex-col md:items-center sm:items-center'>
        <Link to="LoginPage"><Button onClick={() => {}} children="ログイン"/></Link>
        <Link to="RegistrationPage"><Button onClick={() => {}} children="会員登録"/></Link>
      </div>
      </div>
    </>
  );
};

export default Content;
