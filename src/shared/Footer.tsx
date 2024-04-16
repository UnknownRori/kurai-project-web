import Logo from "@/assets/images/logo.webp";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

type LinkProps = {
    to: string,
} & PropsWithChildren;

function Link(props: LinkProps) {
    return (
        <NavLink to={props.to} className={({ isActive }) => {
            return (isActive ? "text-white" : "text-secondary-500");
        }}>
            {props.children}
        </NavLink>
    );
}

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 bg-[#121212] p-4">
            <header className="flex flex-col gap-2 justify-center items-center text-white">
                <img src={Logo} alt="kurai-project" className="w-48" />
                <h1 className="text-4xl">Kurai Project</h1>
            </header>
            <ul className="flex gap-2">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://github.com/UnknownRori/kurai-project" className="text-secondary-500">Github</a>
                </li>
                <li>
                    <Link to='/news'>News</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/download'>Download</Link>
                </li>
            </ul>
            <p className="text-secondary-500 text-center mx-[30%]">
                Official homepage of Kurai Project open source fan-game set in world of Touhou Project.
                Hosts downloads of game and links to community sites and resources.
            </p>
        </footer>
    );
}