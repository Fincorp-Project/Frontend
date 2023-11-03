import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import CreatePassword from './pages/CreatePassword';
import RegistrationComplete from './pages/RegistrationComplete';
import EmailSent from './pages/EmailSent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Sidebar from './components/sidebar';
import Users from './pages/users';
import Topbar from './components/topbar';
import CreateUser from './pages/CreateUser';
import NewUserLogin from './pages/NewUserLogin';
import NewUserVerification from './pages/NewUserVerification';
import CreateNewUserPassword from './pages/CreateNewUserPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={1000} />
    <Routes>
     
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/new-user-login" element={<NewUserLogin />}/>
      <Route path="/new-user-verification" element={<NewUserVerification />}/>
      <Route path="/new-user-create-password" element={<CreateNewUserPassword />}/>

      <Route path="/mainpage" element={<MainPage />}/>
      <Route path="/email/send" element={<EmailSent />}/>
      <Route path="/verify-email/:token" element={<Verification />}/>
      <Route path="/create-pass/:token" element={<CreatePassword />}/>
      <Route path="/registration/complete" element={<RegistrationComplete />}/>



    </Routes>
    <Topbar />
    <Sidebar>
      <Routes>
     
      <Route path="/users" element={<Users />}/>
      <Route path="/create-user" element={<CreateUser />}/>

      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
