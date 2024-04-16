import { RequirementsRows } from "@/pages/Download";

export default [
    {
        component: "CPU",
        minimum: "2.0 GHz",
        recommended: "> 2.0 Ghz",
    },
    {
        component: "RAM",
        minimum: "300 Mb",
        recommended: "> 500Mb",
    },
    {
        component: "GPU",
        minimum: "1 Gb",
        recommended: "> 1 Gb",
    },
] as RequirementsRows[];