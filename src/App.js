import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { clearMessage } from './redux/action/message';
import Home from './component/Home';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(clearMessage()); // clear message when changing location
  }, [dispatch, location]);

  return (
    <Home />
  );
}

export default App;
