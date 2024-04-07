type HamburgerProps = {
    state: boolean,
    onClick: () => void;
}

export function HamburgerIcon(props: HamburgerProps) {
    return (
        <button onClick={() => props.onClick()} className="flex flex-col gap-[5px] w-12">
            <span className={`p-[3px] duration-500 bg-white rounded-full ${props.state ? "translate-y-[12px] -rotate-[45deg]" : ""}`}></span>
            <span className={`p-[3px] duration-500 bg-white rounded-full ${props.state ? "translate-y-[1px] rotate-[45deg]" : ""}`}></span>
            <span className={`p-[3px] duration-500 bg-white rounded-full ${props.state ? "-translate-y-[9px] rotate-[45deg]" : ""}`}></span>
        </button>
    );
}