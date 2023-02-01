import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateAccount } from "./Pages/createAccount/createAccount";
import { Home } from "./Pages/Home/Home";
import { Landing } from "./Pages/Landing/Landing";
import { initializeApp } from "firebase/app";
import { config } from "./authConfig/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
