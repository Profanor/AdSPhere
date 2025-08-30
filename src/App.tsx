import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import BillboardsPage from "@/pages/billboards/page";
import InfluencersPage from "@/pages/influencers/page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/billboards" element={<BillboardsPage />} />
      <Route path="/influencers" element={<InfluencersPage />} />
    </Routes>
  );
}
