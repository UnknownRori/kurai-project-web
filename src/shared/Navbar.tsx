import { HamburgerIcon } from "@/components/icons/Hamburger";
import useToggle from "@/composable/useToggle";

export function Navbar() {
    const [hamburgerState, toggleHamburger] = useToggle();

    return (
        <nav className="flex relative justify-between items-center py-4 px-12 gap-8 bg-gray-900">
            <header>
                <h1 className="text-3xl text-white font-bold">Kurai Project</h1>
            </header>
            <div className={`lg:flex sm:border-gray-500 sm:border-2 lg:border-0
                ${hamburgerState ? 'sm:translate-y-16' : 'sm:translate-y-16 sm:-translate-x-[100%]'} 
                lg:relative sm:absolute sm:top-0 sm:left-0 sm:w-full lg:w-auto sm:p-5 lg:p-0 lg:translate-x-0 lg:translate-y-0 
                justify-center items-center text-white transition-all duration-500 bg-gray-900`}>
                <ul className="flex gap-4 md:flex-row sm:flex-col">
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
                        <a href="#" className="font-semibold">Download</a>
                    </li>
                    <li>
                        {/* TODO : Make this things dropdown */}
                        <a href="https://unknownrori.github.io/kurai-project/" className="font-semibold">Play in Browser</a>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden md:flex sm:flex">
                <HamburgerIcon state={hamburgerState} onClick={toggleHamburger} />
            </div>
        </nav>
    );
}