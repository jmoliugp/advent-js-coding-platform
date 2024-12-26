import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import ChallengePage from "@/pages/challenge";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/:id" element={<ChallengePage />} />
      </Routes>
    </Router>
  );
}