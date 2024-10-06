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
// import DiscoverPage from "./pages/discover.jsx";
// import SavedPropertyPage from "./pages/savedProperty.jsx"; 

function App() {
  return (
    <div>
      <ToastContainer limit={5} />
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
    </div>
  );
}

export default App;
