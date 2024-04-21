import useScroll from "@/composable/useScroll";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

export default function LineFrame(props: PropsWithChildren) {
    const [percentage, setPercentage] = useState(0);
    const scrollPositionY = useScroll();
    const contentRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.clientHeight;
            const scrollTop = contentRef.current.offsetHeight - scrollPositionY;
            console.log(window.document.body.clientHeight);
            const percentage = ((scrollTop - 80) / (contentHeight - 80)) * (8 - 95) + 95;
            setPercentage(percentage);
        }
    }, [scrollPositionY]);

    return (
        <div className="relative flex gap-4 min-w-[100vw]">
            <svg
                className="absolute top-0 left-0 sm:hidden md:block h-full z-1"
                viewBox="0 0 10 100%"
                preserveAspectRatio="none"
            >
                <line x1="30" y1="8%" x2="30" y2="88%" stroke="gray" strokeWidth="1" />
                <circle cx="30" cy={`${percentage}%`} r="12" fill="black" stroke="white" strokeWidth="2" />
                <circle cx="30" cy={`${percentage}%`} r="8" fill="black" stroke="white" strokeWidth="2" />
                <line x1="30" y1="88%" x2="10" y2="95%" stroke="gray" strokeWidth="1" />
            </svg>
            <div
                ref={contentRef}
                className="md:mx-32 sm:mx-0 w-full">
                {props.children}
            </div>
        </div>
    );
}