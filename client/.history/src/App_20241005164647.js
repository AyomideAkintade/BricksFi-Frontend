import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import HomeFourth from "./components/login.jsx";
import HomeEight from "./components/signup.jsx";
import ForgotPasswordPage from "./components/forgotPassword.jsx";
import DashboardLayout from "./pages/dashboardLayout";
import DashboardPage from "./pages/dashboard.jsx";
import PieAnalytics from "./components/analytics.jsx";
import Discover from "./components/discover.jsx";
import SavedPropertyPage from "./components/savedProperties.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { BrCookies } from "./utils/storage/cookies.js";
// import DiscoverPage from "./pages/discover.jsx";
// import SavedPropertyPage from "./pages/savedProperty.jsx"; 
import { Buffer } from "buffer";
import DiscoverAsset from "./components/DiscoverAssrt.jsx";
import OwnedProperties from "./components/OwnedProps.jsx";
window.Buffer = Buffer;

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ isLoading, setLoading ] = useState(true);

  useEffect(()=>{
    const ck = new BrCookies(document);
    ck.getCookie('authToken')
      .then((value) => {
        setLoggedIn(true);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, [])
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <ToastContainer limit={5} />
      {loggedIn ? 
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />  
            <Route path='/dashboard' element={<DashboardPage />} />  
            <Route path="discover" element={<Discover/>} />
            <Route path="discover/asset/:id" element={<DiscoverAsset />} />
            <Route path="owned" element={<OwnedProperties/>} />
            <Route path="saved-property" element={<SavedPropertyPage/>} />  
            <Route path="analytics" element={<PieAnalytics />} />  
          </Route>
          <Route path="*" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />            
          </Route>
        </Routes>
      </Router>
      : 
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<HomeFourth />} />
          <Route path="/login" element={<HomeFourth />} />
          <Route path="/signup" element={<HomeEight />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
