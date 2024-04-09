import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
}