import profile from "../logo/Profile.png";
import chart from "../logo/Chart.png";
import menu from "../logo/MENU.png";
import logoff from "../logo/logoff.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-[250px] z-10 fixed h-[100vh] bg-sidebar-kesa flex flex-col gap-7">
            <div className="h-24 flex px-4 items-center gap-4">
                <img src={logoff} alt="" />
                <div>
                    <a href="" className="text-sm font-bold text-warna-text">
                        FIVE FORTUNE
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <a href="" className="px-5">
                    Menu
                </a>
                <div className="w-[200px] pl-2">
                    <div className="flex gap-2 pl-4 py-2 rounded-md">
                        <img src={profile} alt="" className=""/>
                        <a href="/" className="text-text-sidebar">
                            Home
                        </a>
                    </div>
                </div>
                <div className="flex gap-2 px-6">
                    <img src={chart} alt="" />
                    <a href="" className="text-text-sidebar">
                        Dashboard
                    </a>
                </div>
                <div className="flex gap-2 px-6">
                    <img src={menu} alt="" />
                    <Link className="text-text-sidebar text-md" to="/project">Project</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
