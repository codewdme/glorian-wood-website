import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Homepage />} />
        {/* 
        <Route path="/home1" element={<Home1 />} /> */}
        {/* <Route path="/home1-rtl" element={<Home1RTL />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3_construction" element={<Home3 />} />
        <Route path="/home4_personal_architect" element={<Home4 />} />
        <Route path="/home5_residence" element={<Home5 />} />
        <Route path="/home6_furniture" element={<Home6 />} />
        <Route path="/home7_landscape" element={<Home7 />} />
        <Route path="/home7_landscape_360" element={<Home7360 />} />
        <Route path="/home8_portfolio" element={<Home8 />} />
        <Route path="/home10" element={<Home10 />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}

        {/* <Route path="/innerpages/contact" element={<ContactPage />} />
        <Route path="/innerpages/portfolio" element={<PortfolioPage />} />
        <Route path="/innerpages/services" element={<ServicesPage />} />
        <Route path="/innerpages/single_post" element={<SinglePost />} />
        <Route path="/innerpages/single_project" element={<SingleProject />} /> */}
        {/* <Route
          path="/innerpages/single_project2"
          element={<SingleProject2 />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
