import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verification from './pages/Verification';
import CreatePassword from './pages/CreatePassword';
import RegistrationComplete from './pages/RegistrationComplete';

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Verification />
      <CreatePassword />
      <RegistrationComplete />
    </div>
  );
}

export default App;
