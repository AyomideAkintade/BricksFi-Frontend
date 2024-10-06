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
        // this.setState({ isLoading: false }); // Set loading to false even if there is an error
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
          <Route path="*" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />            
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />  
            <Route path="discover" element={<Discover/>} /> 
            <Route path="saved-property" element={<SavedPropertyPage/>} />  
            <Route path="analytics" element={<PieAnalytics />} />  
          </Route>
        </Routes>
      </Router>
      : 
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<HomeFourth />} />
          <Route path="/signup" element={<HomeEight />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* Dashboard Routes with Sidebar and Header */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />  
            <Route path="discover" element={<Discover/>} /> 
            <Route path="saved-property" element={<SavedPropertyPage/>} />  
            <Route path="analytics" element={<PieAnalytics />} />  
          </Route>
        </Routes>
      </Router>
      }
    </div>
  );
}

export default App;
