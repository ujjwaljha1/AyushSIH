import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home";
import LoginSignup from "./Pages/User/LoginSignup";
import ApplicationTracking from "./Pages/Tracking/Tracking";
import MultiPageForm from "./Pages/Form/ApplicationForm";
import AdminReviewPage from "./Pages/Views/Admin";
import GovOfficialPage from "./Pages/Views/Govt";
import FAQHome from "./Pages/FAQHome";
import PastApplicationsPage from "./Pages/Views/Past";
import Footer from "./Pages/Home/Footer";
import PMSS from "./Pages/Blogs/PMSS";

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
        <Route path="/FAQ" element={<FAQHome/>}/>
        <Route path="/past"element={<PastApplicationsPage/>}/>
        <Route path ="/pmsss"element={<PMSS/>}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
