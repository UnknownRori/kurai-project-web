import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div>
            {props.children}
            </div>
            <Footer />        
        </>
    );
}