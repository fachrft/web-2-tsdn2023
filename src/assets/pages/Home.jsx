import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardSatu from "../components/DashboardSatu";
import DashboardDua from "../components/DashboardDua";
import DashboardTiga from "../components/DashboardTiga";
import DashboardEmpat from "../components/DashboardEmpat";
import DashboardLima from "../components/DashboardLima";

const Home = () => {
    return (
        <div className="flex overflow-x-hidden">
            <div>
                <Sidebar />
            </div>
            <div className="w-[100vw]">
                <Navbar />
                <Hero />
                <div className="overflow-x-hidden">
                    <DashboardSatu />
                    <DashboardDua />
                    <DashboardTiga />
                    <DashboardEmpat />
                    <DashboardLima />
                </div>
            </div>
        </div>
    );
};

export default Home;
