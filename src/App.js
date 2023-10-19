import './App.css';
import Signup from './components/Signup';
import Verification from './pages/Verification';
import CreatePassword from './pages/CreatePassword';
import RegistrationComplete from './pages/RegistrationComplete';

function App() {
  return (
   <>
    {/* <Signup></Signup> */}
    <div className='App'>
      <Verification />
      {/* <CreatePassword /> */}
      {/* <RegistrationComplete /> */}
    </div>
    </>
  );
}

export default App;
