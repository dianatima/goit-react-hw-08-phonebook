import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from './Layout';
import { PrivateRout } from './PrivateRoute';
import { RestrictedRout } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home/Home')); 
const RegisterPage = lazy(() => import('../pages/Register/Register')); 
const LoginPage = lazy(() => import('../pages/Login/Login')); 
const PhonebookPage = lazy(() => import('../pages/Phonebook/Phonebook')); 

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return isRefreshing ? (
    'Fetching user data...') : (
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RestrictedRout component={RegisterPage} redirectTo='/phonebook' />}/>
        <Route path='/login' element={<RestrictedRout component={LoginPage} redirectTo='/phonebook' />}/>
        <Route path='/phonebook' element={<PrivateRout component={PhonebookPage} redirectTo='/login' />} />
      </Route>
    </Routes>
    )
  
}