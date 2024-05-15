import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 追加
import TopPage from './component/Pages/TopPage';
import Login from './component/Pages/LoginPage';
import RegistrationPage from './component/Pages/RegistrationPage';
import MyPage from './component/Pages/MyPage';
import NewPostPage from './component/Pages/NewPostPage';
import PostListPage from './component/Pages/PostListPage';
import MembersInfoChangePage from './component/Pages/MembersInfoChangePage';
import PostsDetailPage from './component/Pages/PostsDetailPage';
import NotFoundPage from './component/Pages/NotFoundPage';
import { RootState } from './redux/store'; // 追加
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // 追加

  return (
    <Router>
       <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        {/* ログインしていない場合は404ページにリダイレクト */}
        <Route path="/MyPage" element={isAuthenticated ? <MyPage /> : <Navigate to="/NotFoundPage" />} />
        <Route path="/NewPostPage" element={<NewPostPage />} />
        <Route path="/PostListPage" element={<PostListPage />} />
        <Route path="/MembersInfoChangePage" element={<MembersInfoChangePage />} />
        <Route path="/PostsDetailPage" element={<PostsDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </PersistGate>
    </Router>
  );
}

export default App;
