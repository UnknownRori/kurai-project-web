import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LineFrame from "@/components/LineFrame";

export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <LineFrame>
                {props.children}
            </LineFrame>
            <Footer />        
        </>
    );
}