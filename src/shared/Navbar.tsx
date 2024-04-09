import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

import { HamburgerIcon } from "@/components/icons/Hamburger";
import useToggle from "@/composable/useToggle";
import Logo from "@/assets/images/logo.webp";

type LinkProps = {
    to: string,
} & PropsWithChildren;

const InActiveClassName = "px-4 py-2 text-center text-center hover:bg-primary-50 hover:text-text-950 duration-500 w-full";

function Link(props: LinkProps) {
    return (
        <li className="flex items-center justify-center">
            <NavLink to={props.to} className={({ isActive }) => {
                return (isActive
                    ? "bg-white border-white px-4 py-2 text-center flex text-black font-bold shadow-white shadow-md hover:shadow-lg duration-500"
                    : InActiveClassName) + " flex justify-center border-2 border-secondary-800 hover:-translate-y-2 hover:border-white rounded-md duration-50 w-full";
            }}>
                <p>

                {props.children}
                </p>
            </NavLink>
        </li>
    );
}

export function Navbar() {
    const [hamburgerState, toggleHamburger] = useToggle();

    return (
        <nav className="flex relative justify-between items-center py-4 px-12 gap-8 bg-black border-[1px] border-secondary-800">
            <header className="flex justify-center items-center gap-2">
                <img src={Logo} className="w-24" />
                <h1 className="text-3xl text-white font-bold">Kurai Project</h1>
            </header>
            <div className={`lg:flex sm:border-primary-900 sm:border-2 lg:border-0 bg-black z-10
                ${hamburgerState ? ' sm:translate-y-16 ' : ' sm:translate-y-16 sm:-translate-x-[100%] '} 
                lg:relative sm:absolute sm:top-0 sm:left-0 sm:w-full lg:w-auto sm:p-5 lg:p-0 lg:translate-x-0 lg:translate-y-0 
                justify-center items-center text-white transition-all duration-500`}>
                <ul className="flex gap-4 md:flex-row sm:flex-col bg-black">
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/download'>Download</Link>
                    {/* TODO : Make this things dropdown */}
                    <li className="flex items-center justify-center border-2 border-accent-500 hover:-translate-y-2 hover:border-white text-center rounded-md duration-500 shadow-white shadow-md transition-all w-full">
                        <a href="https://unknownrori.github.io/kurai-project/" className={InActiveClassName}>Play in Browser</a>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden md:flex sm:flex">
                <HamburgerIcon state={hamburgerState} onClick={toggleHamburger} />
            </div>
        </nav>
    );
}