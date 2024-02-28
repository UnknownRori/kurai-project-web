import { HamburgerIcon } from "@/components/icons/Hamburger";

export function Navbar() {
    return (
        <nav className="flex justify-between py-4 px-12 gap-8 bg-gray-900">
            <header>
                <h1 className="text-3xl text-white font-bold">Kurai Project</h1>
            </header>
            <div className="lg:flex sm:hidden justify-center items-center text-white">
                <ul className="flex gap-4">
                    <li>
                        <a href="#" className="font-bold">Home</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold">News</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold">Gallery</a>
                    </li>
                    <li>
                        {/* TODO : Make this things dropdown */}
                        <a href="#" className="font-semibold">Play in Browser</a> 
                    </li>
                </ul>
            </div>
            <div className="lg:hidden md:flex sm:flex">
                <HamburgerIcon />
            </div>
        </nav>
    );
}