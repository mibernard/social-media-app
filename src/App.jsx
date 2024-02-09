import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import useAuthStore from './store/authStore';

function App() {
  const authUser = useAuthStore((state) => state.user);
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage></HomePage> : <Navigate to={'/auth'}></Navigate>}></Route>
        <Route path='/auth' element={!authUser ? <AuthPage></AuthPage> : <Navigate to={'/'}></Navigate>}></Route>
        <Route path='/:username' element={<ProfilePage />}></Route>
      </Routes>
    </PageLayout>
  );
}

export default App;
