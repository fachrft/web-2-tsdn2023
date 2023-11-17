import Provinsi from "../images/kecelakaan per-provinsi 1.png";
import Bar from "../images/bar.png";

const DashboardTiga = () => {
    return (
        <div className="mt-20 ml-[250px] pl-10">
            <div className="w-[80vw] text-center mb-10">
                <h1 className="text-3xl font-semibold">Kecelakaan Per Provinsi Pada Tahun 2020</h1>
            </div>
            <div className="relative w-[80vw]">
                <img src={Bar} alt="" className="absolute top-4 right-10" />
                <img src={Provinsi} alt="" />
                <div className="w-[300px] text-center absolute top-[430px]">
                    <h1 className="text-xl"><span className="font-bold">Jawa Timur</span> peringkat ke 1 kecelakaan terbanyak antar provinsi dengan <span className="font-bold">36.340 kasus</span> Pada Tahun 2020</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardTiga;
