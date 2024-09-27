import LandingPage from "./LandingPage";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
// import { Login } from "iconsax-react";
import LoginSys from "./LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
function App() {
  const clientid =
    "692351922579-57h6cn8v9at123rh4kg4jilqec4g3tj6.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientid}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LoginSys />} />
            <Route path="/login/adminlogin" element={<AdminLogin/>}/>
            <Route path="/adminpage" element={<AdminPage/>}/>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
