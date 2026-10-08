import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import EventCountdown from "./components/EventCountdown";
import ProgramSection from "./components/ProgramSection";
import Testimonial from "./components/Testimonial";
import JoinUs from "./components/JoinUs";
// import StatsSection from "@/components/StatsSection";
// import MemberSection from "@/components/MemberSection";
// import BlogSection from "@/components/BlogSection";
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
            <Testimonial />
            <JoinUs />
            <Footer />
            {/* <StatsSection />
            <MemberSection />
            <BlogSection />
            <ProudBanner /> */}
        </>
    );
}
