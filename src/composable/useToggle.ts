import { useState } from "react";

type FnReturn = () => void;

export default function useToggle(initial?: boolean): [boolean, FnReturn] {
    const [state, setState] = useState(initial ?? false);

    function toggle() {
        setState(!state);
    }

    return [state, toggle];
}