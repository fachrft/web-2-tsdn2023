import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Monitor from "../images/monitor.png";
import MonitorGambar from '../pelanggaran/Monitor1.png'
import Animasi from "../pelanggaran/Animasi.jpg";

const Project = () => {
    return (
        <div className="flex overflow-x-hidden">
            <div>
                <Sidebar />
            </div>
            <div className="w-[100vw]">
                <Navbar />
                <div className="relative h-[130vh] w-[100vw] pl-[200px] pt-40">
                    <div className="w-[90vw] text-center">
                        <h1 className="text-3xl font-semibold">Prototype Project</h1>
                    </div>
                    <div className="flex justify-around w-[90vw]">
                        <div className="relative">
                            <div className="relative">
                                <a href="https://www.youtube.com/watch?v=ItmEitPM_eM">
                                    <img src={MonitorGambar} alt="" className="w-[69vh] max-w-[69vh] relative" />
                                </a>
                            </div>

                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">Video Prototype Project</h1>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="https://www.youtube.com/watch?v=ozXGhidXvXk">
                                <img src={Monitor} alt="" className="w-[69vh] max-w-[69vh]" />
                            </a>
                            <a href="">
                                <img src={Animasi} alt="" className="w-[55vh] absolute top-20 -z-10 right-14" />
                            </a>
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">Video Prototype Animasi</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
