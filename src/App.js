import './App.css';
import Verification from './pages/Verification';
import CreatePassword from './pages/CreatePassword';
import RegistrationComplete from './pages/RegistrationComplete';
import EmailSent from './pages/EmailSent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Verification />} />
      <Route path='/create/pass' element={<CreatePassword />} />
      <Route path='/registration' element={<CreatePassword />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
