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
        <Route path="/Login" element={<LoginSignup/>}/>    {/*Public */}
         <Route path="/tracking" element={<ApplicationTracking/>}/>  {/*Public */}
        <Route path="/applicationform" element={<MultiPageForm/>}/>    {/*Public */}
        <Route path="/AdminApplication" element={<AdminReviewPage/>}/>
        <Route path="/GovApplication"element={<GovOfficialPage/>}/>
        <Route path="/FAQ" element={<FAQHome/>}/> {/*Public */}
        <Route path="/past"element={<PastApplicationsPage/>}/>  
        <Route path ="/pmsss"element={<PMSS/>}/>    {/*Public */}
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
