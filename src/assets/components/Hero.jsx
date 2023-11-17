import heroSection from "../images/hero.png";

const Hero = () => {
    return (
        <div className="relative h-[106vh] w-[100vw] ml-[250px] z-30">
            <div className="pl-14 mt-16 flex flex-col gap-10">
                <div className="text-3xl mt-32">
                    <h1 className="text-3xl font-bold">Selamat Datang Di FIFO</h1>
                </div>
                <div className="w-[220px] h-[50px] border-s-4 border-warna-text px-2 flex justify-center items-center mb-5">
                    <h1>Created By Five Fortune</h1>
                </div>
                <a href="/project">
                    <div className="w-[315px] h-[49px] bg-warna-text flex px-8 items-center rounded-full">
                        <h1 className="text-white font-semibold">View Plans</h1>
                    </div>
                </a>
            </div>
            <div className=" ">
                <img src={heroSection} alt="" className="w-[85vw] absolute bottom-28" />
            </div>
        </div>
    );
};

export default Hero;
