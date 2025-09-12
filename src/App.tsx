// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home/Home"
import AboutPage from "./pages/AboutPage/AboutPage";
import ProblemSet from "./pages/Problemset/Problemset";
import Contest from "./pages/Contest/Contest";
import LoginPage from "./pages/Login/Login";
// import Announcement from "./pages/Announcement/Announcement";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/problem" element={<ProblemSet />} />
        {/* <Route path="/announcement" element={<Announcement />} /> */}
        <Route path="/contest" element={<Contest />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
