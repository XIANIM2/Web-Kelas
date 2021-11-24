import NavBar from "../components/navBar";
import murid from "../json/murid.json";

export default function Murid() {
    const Data = [];
    murid.forEach(x => Data.push(
        <div className="bg-card rounded-md">
            <div className="mt-auto mb-auto space-x-4 flex p-5">
                <img className="rounded-xl" src={x.foto ? `/data/images/${x.foto}` : '/data/images/default.jpeg'} alt="profil" height="100px" width="100px"></img>
                <div className="font-mono text-xs lg:text-lg lg:mt-0.5">
                    <p key={x.nama}><span key={x.nama} className="font-semibold">Nama: </span>{`${x.nama}`}</p>
                    <p key={x.absen}><span key={x.absen} className="font-semibold">Absen: </span>{`${x.absen ? x.absen : '-'}`}</p>
                    <p key={x.gender}><span key={x.gender} className="font-semibold">Jenis Kelamin: </span>{`${x.gender ? x.gender : '-'}`}</p>
                    <p key={x.birth.toString()}><span key={x.birth.toString()} className="font-semibold">Tanggal Lahir: </span>{`${x.birth ? x.birth : '-'}`}</p>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            <NavBar />
            <div className="ml-10 mt-6 mr-10">
                <h1 className="text-white text-2xl lg:text-4xl font-poppins font-bold">
                    Data Murid
                </h1>
                <p className="text-white text-sm lg:text-lg mt-5">
                    Data Murid Kelas XI Animasi 2, baik berupa nama, absen, tanggal lahir dan jenis kelamin
                </p>
            </div>
            <div className="p-10 grid space-y-4 lg:grid-cols-3 lg:gap-2 lg:space-y-0">
                {Data}
            </div>
        </>
    )
}