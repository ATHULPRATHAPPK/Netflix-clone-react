
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/signup';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
 

  return (
   <>
<AuthContextProvider>
   <Navbar/>
   
<Routes>
<Route  exact path='/' element={<Home/>}/>
<Route path='/log-in' element={<Login/>}/>
<Route path='/profile' element={<ProtectedRoute> <Profile/> </ProtectedRoute>}/>
<Route path='/sign-up' element={<Signup/>}/>

</Routes>
</AuthContextProvider> 
    </>
  )
}

export default App
