import React, { useState } from 'react';
import './index.css';
import AllRoutes from './components/AllRoutes';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
     <AllRoutes />
    </>
  );
}

export default App;