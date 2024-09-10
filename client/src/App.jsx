import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home";
import LoginSignup from "./Pages/User/LoginSignup";
import ApplicationTracking from "./Pages/Tracking/Tracking";
import MultiPageForm from "./Pages/Form/ApplicationForm";
import AdminReviewPage from "./Pages/Views/Admin";
import GovOfficialPage from "./Pages/Views/Govt";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginSignup/>}/>
        <Route path="/tracking" element={<ApplicationTracking/>}/>
        <Route path="/applicationform" element={<MultiPageForm/>}/>
        <Route path="/AdminApplication" element={<AdminReviewPage/>}/>
        <Route path="/GovApplication"element={<GovOfficialPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
