import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Monitor from "../images/monitor.png";
import PelanggaranHelm from "../pelanggaran/pelanggaran1.png";
import PelanggaranBoti from "../pelanggaran/pelanggaran2.png";
import PelanggaranKecepatan from "../pelanggaran/pelanggaran3.png";
import Jarak from "../pelanggaran/Jarak.png";
import Animasi from "../pelanggaran/Animasi.jpg";

const Project = () => {
    return (
        <div className="flex overflow-x-hidden">
            <div>
                <Sidebar />
            </div>
            <div className="w-[100vw]">
                <Navbar />
                <div className="relative h-[130vh] w-[100vw] ml-[200px] pt-40">
                    <div className="w-[90vw] text-center">
                        <h1 className="text-3xl font-semibold">Prototype Project</h1>
                    </div>
                    <div className="flex justify-around w-[90vw]">
                        <div className="relative">
                            <a href="https://www.youtube.com/watch?v=ItmEitPM_eM">
                                <img src={Monitor} alt="" className="w-[69vh]" />
                            </a>
                            <a href="">
                                <img src={PelanggaranHelm} alt="" className="absolute top-[99.5px] left-12 -z-10 w-52" />
                            </a>
                            <a href="">
                                <img src={PelanggaranBoti} alt="" className="absolute top-[94px] left-64 -z-10 w-52" />
                            </a>
                            <a href="">
                                <img src={PelanggaranKecepatan} alt="" className="absolute top-[209px] left-12 -z-10 w-52" />
                            </a>
                            <a href="">
                                <img src={Jarak} alt="" className="absolute top-[209px] left-64 -z-10 w-52" />
                            </a>
                            <div className="text-center">
                                <h1 className="text-3xl font-semibold">Video Prototype Project</h1>
                            </div>
                        </div>
                        <div className="relative">
                            <a href="https://www.youtube.com/watch?v=ozXGhidXvXk">
                                <img src={Monitor} alt="" className="w-[69vh] relative" />
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
