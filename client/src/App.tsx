import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Pages/createAccount/createAccount";
import { Home } from "./Pages/Home/Home";
import { Landing } from "./Pages/Landing/Landing";
import { Protected } from "./authentification/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./authentification/provider/authProvider";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
