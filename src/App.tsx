import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from './contexts/IUserContext';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div>
      <BrowserRouter>

        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />


          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
