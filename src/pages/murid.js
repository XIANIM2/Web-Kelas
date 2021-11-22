import NavBar from "../components/navBar";
import murid from "../data/murid.json";

export default function Murid() {
    const Data = [];
    murid.forEach(x => Data.push(
        <div className="bg-card rounded-md p-3 flex space-x-4">
            <img src={`../data/images/contoh.png`} alt="foto" width="150" height="150" />
            <div className="font-mono">
                <p>{`Nama: ${x.nama}`}</p>
                <p>{`Absen: ${x.absen}`}</p>
                <p>{`Jenis Kelamin: ${x.gender}`}</p>
                <p>{`Tanggal Lahir: ${x.birth}`}</p>
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