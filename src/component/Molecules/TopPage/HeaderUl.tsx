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