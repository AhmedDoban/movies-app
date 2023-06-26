import React, { useState, useEffect } from "react";
import Auth from "./assets/screens/Auth/Auth";
import Guest from "./assets/screens/Guest/Guest";

function App() {
  const [Login, SetLogin] = useState(false);

  useEffect(() => {
    const LoaclLoginIN = JSON.parse(localStorage.getItem("Login"));
    SetLogin(LoaclLoginIN);
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        {Login ? <Auth SetLogin={SetLogin} /> : <Guest SetLogin={SetLogin} />}
      </div>
    </React.Fragment>
  );
}

export default App;
