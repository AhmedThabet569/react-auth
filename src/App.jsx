  
 import { Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { Dashboard } from '@mui/icons-material'
import PostUser from './pages/post-user/PostUser'
import UpdateUser from './pages/update-user/UpdateUser'
import { useAuth } from './hooks/useAuth'
import DashboardPage from './pages/dashboard/DashboardPage'
import Home from './pages/home/HomePage'

function App() {
   const ProvideRoute = ({element}) => {
      const currentUser = useAuth();  
      return currentUser ? element : <Navigate to="/login" />
   }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProvideRoute element={<DashboardPage/>}/>}> </Route>
          <Route path="/user" element={<ProvideRoute element={<PostUser/>}/>}> </Route>
          <Route path="/user/:id/edit" element={<ProvideRoute element={<UpdateUser/>}/>}> </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
