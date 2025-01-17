import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom';

import { DefaultThemeContext } from '../App';

function Home() {
    // const [searchParams, setSearchParams] = useSearchParams();    

    // const handleSetParams = () => {
    //     for (const key of searchParams) {
    //         console.log(11, key[0]);
    //     }
    // }

    // console.log("REnder bo'ldi");

    const {theme, setTheme} = useContext(DefaultThemeContext);

  return (
    <div>
        <h3>{theme}</h3>
        <button onClick={() => setTheme(prev => prev == "light" ? "dark" : "light")}>Blahbla</button>
    </div>
  )
}

export default React.memo(Home);