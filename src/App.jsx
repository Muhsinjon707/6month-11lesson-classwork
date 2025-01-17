import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import { createContext } from 'react';

export const DefaultThemeContext = createContext();


function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div>
            <DefaultThemeContext.Provider value={{theme, setTheme}}>
                <Routes>
                    <Route index element={
                        <Home />
                    } />

                    <Route path='/about' element={<About />} />
                </Routes>
            </DefaultThemeContext.Provider>
        </div>
    );
}

export default App;