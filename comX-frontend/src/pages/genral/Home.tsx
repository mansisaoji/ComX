
import Navbar from "@/components/Navbar";
import { setTab } from "@/state/tab/tabSlice";
import { RootState } from "@/state/store";
// import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import WorkspacePreview from "./components/WorkspacePreview";
import CTASection from "./components/CTASection";
import HomeFooter from "./components/HomeFooter";

export default function HomePage() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTab("Home"));
  }, [dispatch]);

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden ${
        theme === "dark"
          ? "bg-[#050816] text-white"
          : "bg-[#fafbff] text-slate-950"
      }`}
    >
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Global background atmosphere */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-500/10" />

          <div className="absolute left-[-250px] top-[700px] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-500/5" />

          <div className="absolute right-[-250px] top-[1300px] h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[130px] dark:bg-violet-500/5" />

          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <HeroSection />

        <FeatureSection />

        <WorkflowSection />

        <WorkspacePreview />

        <CTASection />
      </main>

      <HomeFooter />
    </div>
  );
}