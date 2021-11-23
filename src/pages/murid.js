import NavBar from "../components/navBar";
import murid from "./murid.json";

export default function Murid() {
    const Data = [];
    murid.forEach(x => Data.push(
        <div className="bg-card rounded-md">
            <div className="mt-auto mb-auto space-x-4 flex p-5">
                <img src={`/data/images/${x.foto}`} alt="profil" height="20px" width="auto"></img>
                <div className="font-mono text-xs">
                    <p key={x.nama}><span key={x.nama} className="font-semibold">Nama:</span>{`${x.nama}`}</p>
                    <p key={x.absen}><span key={x.absen} className="font-semibold">Absen:</span>{`${x.absen}`}</p>
                    <p key={x.gender}><span key={x.gender} className="font-semibold">Jenis Kelamin:</span>{`${x.gender}`}</p>
                    <p key={x.birth.toString()}><span key={x.birth.toString()} className="font-semibold">Tanggal Lahir:</span>{`${x.birth}`}</p>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            <NavBar />
            <div className="p-10 grid space-y-4">
                {Data}
            </div>
        </>
    )
}