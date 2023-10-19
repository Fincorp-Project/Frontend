import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import CreatePassword from './pages/CreatePassword';
import RegistrationComplete from './pages/RegistrationComplete';
import EmailSent from './pages/EmailSent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/email/send" element={<EmailSent />}/>
      <Route path="/verify" element={<Verification />}/>
      <Route path="/create/pass" element={<CreatePassword />}/>
      <Route path="/registration/complete" element={<RegistrationComplete />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
