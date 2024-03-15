import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { isMobile } from "react-device-detect";
import DExperience from "./components/Desktop/DExperience";
import MExperience from "./components/Mobile/MExperience";
import './App.css'

function App() {
  return (
    <>
      {isMobile ? <MExperience /> : <DExperience />}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
