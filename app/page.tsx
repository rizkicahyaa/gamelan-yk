import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import EventCountdown from "./components/EventCountdown";
import ProgramSection from "./components/ProgramSection";
import Testimonial from "./components/Testimonial";
import JoinUs from "./components/JoinUs";
import Blog from "./components/Blog";
// import StatsSection from "@/components/StatsSection";
// import MemberSection from "@/components/MemberSection";
// import ProudBanner from "@/components/ProudBanner";
import Footer from "./components/Footer";

export default function HomePage() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Heroes />
            <EventCountdown />
            <ProgramSection />
            <Blog />
            <Testimonial />
            <JoinUs />
            <Footer />
            {/* <StatsSection />
            <MemberSection />
            <ProudBanner /> */}
        </>
    );
}
