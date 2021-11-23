import NavBar from "../components/navBar";
import jadwal from "./jadwal.json";

export default function Jadwal() {
    const Data = [];
    jadwal.map(x =>
        Data.push(
            <div className="bg-card2 rounded-md">
                <div className="p-5 cursor-pointer"
                    onClick={
                        function showSchedule() {
                            document.getElementById('view').classList.add("hidden");
                            document.getElementById('back').classList.remove("hidden")
                            var elements = document.getElementsByClassName(x.hari);
                            for (var i = 0; i < elements.length; i++) {
                                elements[i].classList.remove("hidden");
                                elements[i].classList.add("grid")
                            }
                        }
                    }>
                    <h1 className="text-white text-xl font-poppins font-bold">{x.hari}</h1>
                    <p className="mt-3 text-white font-poppins text-xs">{`Jadwal hari ${x.hari} dari minggu ini`}</p>
                </div>
            </div>
        )
    )

    const Data2 = [];
    jadwal.map(x =>
        x.jadwal.map(y =>
            Data2.push(
                <div className={`${x.hari} schedule p-3 hidden space-y-1 mt-4`}>
                    <div className="p-5 bg-card2 rounded-md">
                        <h1 className="font-bold text-white text-xl font-poppins">{y.pelajaran}</h1>
                        <p className="text-white font-mono mt-3">{`Jam pelajaran: ${y.waktu}`}</p>
                        <p className="text-white text-sm mt-6 font-thin">{y.note ? `Note: ${y.note}` : ''}</p>
                    </div>
                </div>
            )
        )
    )

    return (
        <>
            <NavBar />

            <div className="ml-10 mt-6 lg:ml-16">
                <h1 className="text-white text-2xl lg:text-3xl font-poppins font-bold">
                    Jadwal
                </h1>
                <p className="text-white text-sm lg:text-base mt-5">
                    Jadwal pada minggu ini dari hari Senin sampai hari Jumat
                </p>
            </div>

            <div id="view" className="p-10 lg:p-16">
                <div className="grid space-y-4 lg:grid-cols-3 lg:space-y-0 lg:gap-3">
                    {Data}
                </div>
            </div>

            <div className="lg:p-12">
                <button id="back" className="hidden p-3 text-white font-poppins text-2xl" onClick={
                    function hideSchedule() {
                        document.getElementById('view').classList.remove("hidden");
                        document.getElementById('back').classList.add("hidden")
                        var elements = document.getElementsByClassName('schedule');
                        for (var i = 0; i < elements.length; i++) {
                            elements[i].classList.add("hidden");
                            elements[i].classList.remove("grid")
                        }
                    }
                }>{'< Back'}</button>

                <div className="lg:grid lg:grid-cols-3">
                    {Data2}
                </div>
            </div>
        </>
    )
}