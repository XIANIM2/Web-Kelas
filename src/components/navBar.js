import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="p-6">
                <nav className="justify-between flex">
                    <ul>
                        <Link to="/" className="text-white font-poppins font-bold text-2xl lg:text-4xl">XI ANIMASI 2</Link>
                    </ul>
                    <ul className="lg:hidden">
                        <div id="btn1" className="grid space-y-1 lg:space-y-2 mt-1 cursor-pointer"
                            onClick={function hideShow() {
                                if (document.getElementById('btn1')) {
                                    document.getElementById('btn1').classList.add("hidden")
                                }

                                if (document.getElementById('btn2')) {
                                    document.getElementById('btn2').classList.remove("hidden")
                                }

                                if (document.getElementById('navbar')) {
                                    document.getElementById('navbar').classList.remove("hidden")
                                }
                            }}>
                            <div className="bg-white rounded-md h-1 w-7"></div>
                            <div className="bg-white rounded-md h-1 w-7"></div>
                            <div className="bg-white rounded-md h-1 w-7"></div>
                        </div>
                    </ul>
                    <ul id="btn2" className="hidden lg:hidden"
                        onClick={function hideShow() {
                            if (document.getElementById('btn2')) {
                                document.getElementById('btn2').classList.add("hidden")
                            }

                            if (document.getElementById('btn1')) {
                                document.getElementById('btn1').classList.remove("hidden")
                            }

                            if (document.getElementById('navbar')) {
                                document.getElementById('navbar').classList.add("hidden")
                            }
                        }}>
                        <div className="mt-2 lg:mt-3 cursor-pointer">
                            <div className="transform rotate-45 bg-white rounded-md h-1 w-7"></div>
                            <div className="transform -rotate-45 bg-white rounded-md h-1 w-7"></div>
                        </div>
                    </ul>
                    <ul className="hidden lg:flex space-x-3">
                        <Link className="text-3xl font-poppins text-white hover:text-gray-400" to="/">Beranda</Link>
                        <Link className="text-3xl font-poppins text-white hover:text-gray-400" to="/students">Murid</Link>
                        <Link className="text-3xl font-poppins text-white hover:text-gray-400" to="/activity">Kegiatan</Link>
                        <Link className="text-3xl font-poppins text-white hover:text-gray-400" to="/schedule">Jadwal</Link>                    </ul>
                </nav>
            </div>

            <div id="navbar" className="hidden lg:hidden">
                <div className="h-auto bg-card p-4 grid text-center space-y-2">
                    <Link className="text-2xl font-mono text-black hover:text-gray-600" to="/">Beranda</Link>
                    <Link className="text-2xl font-mono text-black hover:text-gray-600" to="/students">Murid</Link>
                    <Link className="text-2xl font-mono text-black hover:text-gray-600" to="/activity">Kegiatan</Link>
                    <Link className="text-2xl font-mono text-black hover:text-gray-600" to="/schedule">Jadwal</Link>
                </div>
            </div>

        </>
    )
}