import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="p-4 flex flex-col md:flex-row items-center md:justify-between bg-slate-600 text-slate-200 sticky top-0 drop-shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold"><Link href={"/"}>WikiRocket!</Link></h1>
            <Search />
        </nav>
    )
}