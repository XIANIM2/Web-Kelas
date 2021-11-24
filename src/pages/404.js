import { Link } from "react-router-dom";
import NavBar from "../components/navBar";

export default function MissingPage() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center mt-20 lg:mt-28">
                <h1 className="text-center font-poppins text-8xl lg:text-9xl text-card">404</h1>
                <p className="text-center font-poppins text-card lg:text-lg mt-2">{'Sepertinya halaman ini kosong :<'}</p>
                <Link to="/"><button className="text-lg p-6 rounded-lg mt-8 bg-black font-poppins text-white">{'Pulang ke beranda'}</button></Link>
            </div>
        </>
    )
}