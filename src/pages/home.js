import NavBar from "../components/navBar"
import background from "./sekolah.png"

export default function Home() {
    return (
        <>
            <div className="bg-cover h-screen" style={{ backgroundImage: `url(${background})` }}>
                <NavBar />

                <div className="mt-28 lg:mt-32 p-16 lg:p-32">
                    <h1 className="text-white font-bold font-poppins text-3xl lg:text-5xl">XI ANIMASI 2</h1>
                    <p className="text-white mt-5 lg:text-2xl">Bersama dalam kekeluargaan menjadi pribadi yang kuat dan pemberani.</p>
                </div>
            </div>
        </>
    )
}