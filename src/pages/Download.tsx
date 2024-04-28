import Layout from "@/shared/Layout";
import releases from "@/data/releases";
import requirements from "@/data/requirements";

export type RequirementsRows = {
    component: string,
    minimum: string[] | string,
    recommended: string[] | string,
}

function RequirementRow(props: RequirementsRows) {
    let minimum;
    let recomended;

    if (typeof props.minimum == "string") {
        minimum = (<p>{props.minimum}</p>);
    } else {
        minimum = (<ul className="flex flex-col gap-4 list-disc justify-start items-start">
            {props.minimum.map((minimum) => (<li>{minimum}</li>))}
        </ul>);
    }

    if (typeof props.recommended == "string") {
        recomended = (<p>{props.recommended}</p>);
    } else {
        recomended = (<ul className="flex flex-col gap-4 list-disc justify-start items-start">
            {props.recommended.map((recomended) => (<li>{recomended}</li>))}
        </ul>);
    }

    return (
        <tr className="border-b bg-gray-950 border-gray-900">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {props.component}
            </th>
            <td className="px-6 py-4">
                {minimum}
            </td>
            <td className="px-6 py-4 flex">
                {recomended}
            </td>
        </tr>
    );
}

export default function Download() {
    return (
        <Layout>
            <main className="flex flex-col gap-5 justify-center items-center text-center mb-2 min-h-[400px]">
                <div className="absolute h-[200px] w-[200px] group-hover:h-[150px] group-hover:w-[150px] rounded-full bg-[#ffffff69] blur-[128px] pointer-events-none duration-1000 transition-all"></div>
                <h1 className="text-3xl text-white" style={{ textShadow: '0px 2px 12px white' }}>Download Kurai Project for Windows</h1>
                <a href={releases.latest["windows-64"].url} className="flex gap-4 justify-center items-center bg-white rounded-lg
                    font-bold shadow-neon-sm hover:shadow-neon-md shadow-white duration-500 text-black hover:-translate-y-2">
                    <div className="rounded-lg bg-white py-3 px-4">
                        Download
                    </div>
                    <div className="bg-accent-500 rounded-r-lg py-3 px-4">
                        {releases.latest["windows-64"].version}
                    </div>
                </a>
                <span className="text-secondary-500">{releases.latest["windows-64"].bit} bit Windows - {releases.latest["windows-64"].date}</span>
            </main>


            <section className="flex flex-col gap-4 mx-12 justify-center items-center text-white mb-12">
                <main className="flex flex-col gap-2 w-full">
                    <h1 className="text-2xl font-bold">Instruction</h1>
                    <p>
                        We currently provide pre-built packages for Windows. You can also download the source code and build it yourself.
                    </p>

                    <p>
                        If you find any mistakes, please contact us.
                    </p>

                    <ul className="flex flex-col gap-2 text-sm text-secondary-500 list-disc ml-5">
                        <li>
                            Create <a href="https://github.com/UnknownRori/kurai-project/issues">Github issue</a>
                        </li>

                        <li>
                            Email <a href="mailto:UnknownRori@proton.me">UnknownRori &lt;UnknownRori@proton.me&gt;</a>
                        </li>
                    </ul>
                </main>

                <div className="w-full my-8 border-[0.25px] border-secondary-500"></div>

                <div className="flex sm:flex-col lg:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-lg">All Release</h3>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-lg">System Requirements</h3>


                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                                <thead className="text-xs uppercase bg-secondary-900 text-secondary-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Component
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Minimum
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Recommended
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requirements.map((requirement) => <RequirementRow component={requirement.component} minimum={requirement.minimum} recommended={requirement.recommended} />)}
                                </tbody>
                            </table>
                        </div>
                        <span className="mt-2 text-secondary-600">* Might be changed on through development cycle</span>
                    </div>
                </div>
            </section>
        </Layout>
    );
}