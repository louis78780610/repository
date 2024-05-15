// import Link from "../../Atoms/Link";
// import '../../../css/HbMenu.css';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from "../../../redux/formSlice";
// import { authLogout } from "../../../redux/authSlice";
// import Logo from '../../Atoms/Logo';
// import { FC } from "react";
// import '../../../css/HbMenu.css'


// type Props = {
//   open?: boolean;
//   id: string;
// };

// const MyPageHeaderUl: FC<Props> = ({ open, id }) => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const handleLogoutClick = () => {
//     // アラートを表示する
//     const confirmLogout = window.confirm('ログアウトしますか？');
    
//     // ユーザーがキャンセルを選択した場合は処理を中断
//     if (!confirmLogout) {
//       return;
//     }
  
//     // ログアウトの処理を行う
//     dispatch(logout());
//     dispatch(authLogout());
//     navigate('/'); // ログインページなど、ログアウト後に遷移するページのURLを指定
//   };
    
//   return(
//     <div className="container mx-auto flex justify-between items-center">
//       <div className=''>
//         <Link to="/"><Logo/></Link>
//       </div>
//     <nav id={id} aria-hidden={!open} className={`navigation ${open ? "open" : ""}`}>      
//       <ul className="nav-list">
//         <li 
//         className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
//           <Link to="/NewPostPage">
//             新規投稿画面
//           </Link>
//         </li>
//         <li 
//         className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
//           <Link to="/PostListPage">
//             投稿一覧画面
//           </Link>
//         </li>
//         <li 
//         className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
//           <Link to="/MembersInfoChangePage">
//             会員情報変更画面
//           </Link>
//         </li>
//         <li 
//         className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
//           <Link to="/MyPage">
//             マイページ
//           </Link>
//         </li>
//         <li 
//         className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
//           <button onClick={handleLogoutClick}>ログアウト</button>
//       </li>
//       </ul>
//       </nav>
//     </div>
//   );
// };

// export default MyPageHeaderUl;

import Link from "../../Atoms/Link";
import '../../../css/HbMenu.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../../redux/formSlice";
import { authLogout } from "../../../redux/authSlice";


const MyPageHeaderUl = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogoutClick = () => {
    // アラートを表示する
    const confirmLogout = window.confirm('ログアウトしますか？');
    
    // ユーザーがキャンセルを選択した場合は処理を中断
    if (!confirmLogout) {
      return;
    }
  
    // ログアウトの処理を行う
    dispatch(logout());
    dispatch(authLogout());
    navigate('/'); // ログインページなど、ログアウト後に遷移するページのURLを指定
  };
    
  return(
    <div className="header-inner">
      <ul className="nav-list">
        <li 
        className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
          <Link to="/NewPostPage">
            新規投稿画面
          </Link>
        </li>
        <li 
        className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
          <Link to="/PostListPage">
            投稿一覧画面
          </Link>
        </li>
        <li 
        className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
          <Link to="/MembersInfoChangePage">
            会員情報変更画面
          </Link>
        </li>
        <li 
        className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
          <Link to="/MyPage">
            マイページ
          </Link>
        </li>
        <li 
        className="hover:text-gray-300 lg:ml-8 xl:ml-12 2xl:ml-36">
          <button onClick={handleLogoutClick}>ログアウト</button>
      </li>
      </ul>
    </div>
  );
};

export default MyPageHeaderUl;