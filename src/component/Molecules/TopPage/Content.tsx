import { Link } from 'react-router-dom';
import Title from "../../Atoms/Title";
import Button from "../../Atoms/Button";

const Content = () => {
  return(
    <>
      <div className='pt-8'>
      <Title title="Wellcome"/>
      <div className='flex justify-center p-12 md:flex md:flex-col md:items-center sm:flex-col sm:items-center'>
        <Link to="LoginPage"><Button onClick={() => {}} children="ログイン"/></Link>
        <Link to="RegistrationPage"><Button onClick={() => {}} children="会員登録"/></Link>
      </div>
      </div>
    </>
  );
};

export default Content;
