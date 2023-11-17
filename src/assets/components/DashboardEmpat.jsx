import Penyebab from "../images/penyebab.png";
import Kendaraan from "../images/kendaraan.png";

const DashboardEmpat = () => {
    return (
        <div className="mt-20 ml-[250px] pl-10 flex">
            <div>
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-semibold">5 Penyabab Kecelakaan</h1>
                </div>
                <div>
                    <img src={Penyebab} alt="" />
                </div>
            </div>
            <div>
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-semibold">Kendaraan yang sering mengalami kecelakaan</h1>
                </div>
                <div>
                    <img src={Kendaraan} alt="" />
                </div>
                <div className="w-[400px]">
                    <h1 className="text-xl">Jenis kendaraan yang sering mengalami kecelakaan. Sepeda motor terletak pada urutan pertama dengan 122.570 kasus</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardEmpat;
