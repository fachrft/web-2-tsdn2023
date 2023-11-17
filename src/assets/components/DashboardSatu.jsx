import tahun5 from "../images/kecelakaan5tahun.png";
import Jam from "../images/Waktu Kejadian 1.png";
import Kecelakaan5Tahun from '../images/5tahun.png'

const DashboardSatu = () => {
    return (
        <div className="pl-[300px] w-[100vw]" id="dashboard">
            <div className="pl- border-b-4 pb-10">
                <h1 className="text-5xl font-semibold">Dashboard</h1>
            </div>
            <div className="mt-10 pl-20">
                <h1 className="text-2xl font-semibold">Kecelakaan selama 5 tahun beruntun dari tahun 2018 - 2022</h1>
            </div>
            <div className="mt-10">
                <img src={Kecelakaan5Tahun} alt="" className="w-1/2" />
            </div>
            <div className="pt-10 flex gap-14">
                <div>
                    <h1 className="text-xl font-semibold mb-5">Waktu Biasanya Terjadi Kecelakaan</h1>
                    <img src={Jam} alt="" />
                    <div className="flex gap-5 items-center">
                        <div className=" w-4 h-4 rounded-full bg-[#8074A8]"></div>
                        <h1 className="">2022 - Juli</h1>
                        <div className=" w-4 h-4 rounded-full bg-[#9B93C9]"></div>
                        <h1>2020</h1>
                        <div className=" w-4 h-4 rounded-full bg-[#C5BFBE]"></div>
                        <h1>2019</h1>
                    </div>
                </div>
                <div className="">
                    <img src={tahun5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashboardSatu;
