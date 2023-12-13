import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInScreen from './pages/SignInScreen';

function App() {
  return (
    <Routes>
      <Route path='/' Component={SignInScreen}/>
    </Routes>
  );
}

export default App;
