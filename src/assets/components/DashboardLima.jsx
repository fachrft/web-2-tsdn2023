import Usia from '../images/Usia Kecelakaan 1.png'

const DashboardLima = () => {
    return (
        <div className="mt-20 ml-[250px] h-[110vh] pl-10 flex flex-col items-center">
            <div className='text-center mb-10'>
                <h1 className='text-2xl font-semibold'>Range Usia Kecelakaan</h1>
            </div>
            <div>
                <img src={Usia} alt="" />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Usia yang paling banyak mngalami kecelakaan kisaran 15-19 tahun (Remaja) </h1>
            </div>
        </div>
    )
}

export default DashboardLima