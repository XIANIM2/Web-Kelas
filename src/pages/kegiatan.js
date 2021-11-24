import NavBar from "../components/navBar";
import activity from "../json/kegiatan.json"

export default function Activity() {
    const Data = [];

    activity.map(x =>
        Data.push(
            <div className="bg-card2 p-5 rounded-lg">
                <h1 className="text-white text-2xl font-poppins">{x.title}</h1>
                <p className="mt-2 text-white font-mono">{x.info}</p>
                <p className="text-sm text-gray-400 mt-4">Waktu: {x.waktu ? x.waktu : '-'}</p>
            </div>
        )
    )
    return (
        <>
            <NavBar />
            <div id="title" className="ml-10 mr-10 mt-6 lg:ml-16 lg:mr-16">
                <h1 className="text-white text-2xl lg:text-3xl font-poppins font-bold">
                    Kegiatan
                </h1>
                <p className="text-white text-sm lg:text-base mt-5">
                    Kegiatan pada minggu ini
                </p>
            </div>

            <div className="p-10 lg:p-16 grid lg:grid-cols-3 lg:gap-3 space-y-3 lg:space-y-0">
                {Data}
            </div>
        </>
    )
}