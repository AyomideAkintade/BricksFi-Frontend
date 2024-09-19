import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import HomeFourth from "./components/login.jsx";
import HomeEight from "./components/signup.jsx";
import ForgotPasswordPage from "./components/forgotPassword.jsx";
import DashboardLayout from "./pages/dashboardLayout";
import DashboardPage from "./pages/dashboard.jsx";
// import DiscoverPage from "./pages/discover.jsx";
// import SavedPropertyPage from "./pages/savedProperty.jsx"; 

function App() {
  return (
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
          <Route path="discover" element={<div>Discover</div>} /> 
          <Route path="saved-property" element={<div>Saved-Property</div>} />  
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
