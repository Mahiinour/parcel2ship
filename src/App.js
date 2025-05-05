
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { Fragment } from 'react';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/login" element={<LoginPage/>} /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
