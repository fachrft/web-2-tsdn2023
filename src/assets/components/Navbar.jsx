import Search from "../logo/Icon.png";
import Orang from '../logo/orang.png'
import dropDown from '../logo/dropdown.png'
import Lonceng from '../logo/lonceng.png'

const Navbar = () => {
    return (
        <div className="h-[90px] w-[100vw] fixed z-10 flex justify-around items-center pl-[250px] gap-8 border-b-2">
            <div className="flex justify-center relative">
                <input type="text" placeholder="Search" className="w-[40vw] outline-none bg-sidebar-kesa rounded-md px-4 py-2" />
                <a href="" className="text-center">
                    <img src={Search} alt="" className="w-5 absolute right-3 top-2"/>
                </a>
            </div>
            <div>
               <div className="flex justify-center items-center pl-10 gap-2"> 
                    <img src={Orang} alt="" />
                    <h1>Fachrifat Zhafran</h1>
                    <img src={dropDown} alt="" />
               </div>
            </div>
            <div className="">
                <img src={Lonceng} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
