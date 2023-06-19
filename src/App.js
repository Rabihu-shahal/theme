import React, { useState } from 'react';

const white={
  backgroundColor:"white",
 color:"black",minHeight: "100vh"

}
const black={
  backgroundColor:"black",
 color:"white",minHeight: "100vh"

}

function App () {
  const [isDarkTheme, setIsDarkTheme] = useState(white);

 
  const  handleThemeSwitch=()=>{
    if (isDarkTheme===white){
      setIsDarkTheme(black)
    }else
    {
      setIsDarkTheme(white)
    }
  }
  return (
    <div style={isDarkTheme}>
      <h1>Theme Black and White</h1>
      <button onClick={handleThemeSwitch}>Switch Theme</button>
    </div>
  );
};

export default App;