// import { useSelector } from 'react-redux';
// import Link from "../../Atoms/Link";
// import '../../../css/HbMenu.css'
// import { RootState } from '../../../redux/store';
// import Logo from '../../Atoms/Logo';
// import { FC } from "react";

// type Props = {
//   open?: boolean;
//   id: string;
// };

// const HeaderUl: FC<Props> = ({ open, id }) => {
  
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   return(
//     <div className="container mx-auto flex justify-between items-center">
//       <div className=''>
//         <Link to="/"><Logo/></Link>
//       </div>
//     <nav id={id} aria-hidden={!open} className={`navigation ${open ? "open" : ""}`}>      
//       <ul className="navigation-list">
//         <li 
//         className="hamburger-list transition duration-500 ease select-none hover:text-neutral-300 focus:outline-none focus:shadow-outline">
//           <Link to="/LoginPage">
//             ログイン
//           </Link>
//         </li>
//         <li 
//         className="hamburger-list transition duration-500 ease select-none hover:text-neutral-300 focus:outline-none focus:shadow-outline">
//           <Link to="/RegistrationPage">
//             会員登録
//           </Link>
//         </li>
//         {isAuthenticated && (
//           <li className="hamburger-list transition duration-500 ease select-none hover:text-neutral-300 focus:outline-none focus:shadow-outline">
//             <Link to="/MyPage">マイページ</Link>
//           </li>
//         )}      
//       </ul>
//     </nav>
//     </div>
//   );
// };
// export default HeaderUl;

import { useSelector } from 'react-redux';
import Link from "../../Atoms/Link";
import '../../../css/HbMenu.css'
import { RootState } from '../../../redux/store';

const HeaderUl = () => {
  
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return(
    <div className="header-inner">
      <ul className="nav-list">
        <li 
        className="nav-item hover:text-gray-300 lg:ml-24 xl:ml-40 2xl:ml-52">
          <Link to="/LoginPage">
            ログイン
          </Link>
        </li>
        <li 
        className="nav-item hover:text-gray-300 lg:ml-24 xl:ml-40 2xl:ml-52">
          <Link to="/RegistrationPage">
            会員登録
          </Link>
        </li>
        {isAuthenticated && (
          <li className="nav-item hover:text-gray-300 lg:ml-24 xl:ml-40 2xl:ml-52">
            <Link to="/MyPage">マイページ</Link>
          </li>
        )}      
      </ul>
    </div>
  );
};
export default HeaderUl;