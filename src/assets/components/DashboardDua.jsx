import Jelek from "../images/buruk.png";
import Bagus from "../images/baik.png";

const DashboardDua = () => {
    return (
        <div className="pl-[300px] w-[100vw] flex">
            <div>
                <h1 className="text-2xl font-semibold mb-5">5 Jalanan Terburuk Di Indonesia </h1>
                <img src={Jelek} alt="" />
                <div className="mt-10 w-[500px] flex justify-center items-center">
                    <div className="w-[300px]">
                        <h1 className="text-center text-xl font-semibold">Provinsi dengan jalanan buruk berada pada Provinsi Kalimantan Tengah</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold mb-5">5 Jalanan Terbaik Di Indonesia </h1>
                <img src={Bagus} alt="" />
                <div className="mt-16 w-[500px] flex justify-center items-center">
                    <div className="w-[300px]">
                        <h1 className="text-center text-xl font-semibold">Provinsi dengan jalanan baik berada pada Provinsi Sumatera Utara</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardDua;
