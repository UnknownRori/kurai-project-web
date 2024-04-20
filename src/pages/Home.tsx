import { NavLink } from "react-router-dom";
import Layout from "@/shared/Layout";
import WindowImage from "@/components/WindowImage";

import contributors from "@/data/contributors";
import features from "@/data/features";

export type FeatureCardProps = {
    title: string,
    content: string,
};

function FeatureCard(props: FeatureCardProps) {
    return (
        <div className="flex flex-col gap-4 bg-primary-900 p-4 rounded-md w-full shadow-neon-sm 
            hover:shadow-neon-md duration-500 border-[1px] border-secondary-900 hover:border-secondary-500">
            <h1 className="text-2xl text-center">{props.title}</h1>
            {props.content}
        </div>
    );
}

export type ContributorProfileProps = {
    img: string,
    name: string,
};

function ContributorProfile(props: ContributorProfileProps) {
    // TODO : Added hover effect!
    return (
        <img src={props.img} alt={props.name} className="w-24 h-24 rounded-full object-cover shadow-neon-md" />
    );
}

export default function Home() {
    return (
        <Layout>
            <section className="text-white mb-2">
                <header className="group relative min-h-[400px] flex flex-col gap-8 justify-center items-center">
                    <div className="absolute h-[200px] w-[200px] group-hover:h-[150px] group-hover:w-[150px] rounded-full bg-[#ffffff69] blur-[128px] pointer-events-none duration-1000 transition-all"></div>
                    <h1 className="text-2xl text-center" style={{ textShadow: '0px 2px 12px white' }}>
                        An open source fan-game set in world of Touhou Project
                    </h1>
                    <NavLink to="/download" className="flex gap-4 justify-center items-center py-2 px-4 rounded-lg bg-white 
                    font-bold shadow-neon-sm hover:shadow-neon-md shadow-white duration-500 text-black hover:-translate-y-2">
                        Download
                        <svg className="h-8 w-8 text-primary-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />  <polyline points="7 10 12 15 17 10" />  <line x1="12" y1="15" x2="12" y2="3" /></svg>
                    </NavLink>
                </header>
                <main className="flex flex-col gap-8 mb-12">
                    <section className="flex sm:flex-col lg:flex-row gap-4 lg:mx-8">
                        <div className="flex flex-col gap-2 w-full">
                            <h1 className="text-4xl font-bold" style={{ textShadow: 'gray 0px 2px 12px' }}>Introduction</h1>
                            <p className="text-justify">
                                Kurai Project is an open source fan-game set in world of Touhou Project.
                                It is top-down vertical-scrolling curtain of fire shooting game (STG) also known as "Bullet hell" or "Danmaku".
                                STGs are fast-paced games focused around pattern recognition and mastery through practice.
                            </p>

                            <p className="text-justify">
                                Kurai Project is somewhat portable, and it's written in Rust,
                                the portability comes from macroquad crate for handling file and rendering,
                                it support OpenGL, Metal, GLES rendering and also WebGL for browser such as Firefox and Chromium based browser,
                                it can be compiled for number of operating system.
                            </p>
                        </div>
                        <div className="flex justify-center items-center w-full px-8">
                            <WindowImage src="" title="Kurai Project"></WindowImage>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 mx-8">
                        <header>
                            <h2 className="text-2xl font-bold text-center" style={{ textShadow: 'gray 0px 0px 8px' }}>Feature</h2>
                        </header>
                        <main className="flex lg:flex-row sm:flex-col  gap-4 w-full">
                            {
                                features.map((feature) => <FeatureCard title={feature.title} content={feature.content} />)
                            }
                        </main>
                    </section>

                    <section className="flex flex-col gap-2 sm:mx-4 lg:mx-48">
                        <h2 className="text-2xl font-bold" style={{ textShadow: 'gray 0px 0px 8px' }}>About Touhou Project</h2>
                        <p>
                            Touhou Project is an indie game series (also known as "doujin" in Japanese) known for its ensemble cast of characters and memorable soundtracks. 
                            It is produced by and large by a single artist known as ZUN, 
                            and has a permissive license which allows for indie derivative works such as Kurai Project to legally exist.
                        </p>

                        <p>
                            Kurai Project is not a "clone" of Touhou Project, 
                            and tells an original story with its own music, art, gameplay mechanics, and codebase. 
                            While some familiarity with Touhou is helpful, the gameplay can be enjoyed on its own without prior knowledge of the series.
                        </p>
                    </section>

                    <section className="flex flex-col gap-4 sm:mx-4 lg:mx-48">
                        <header>
                            <h2 className="text-2xl font-bold text-center" style={{ textShadow: 'gray 0px 0px 8px' }}>Contributor</h2>
                        </header>
                        <main className="flex gap-4 justify-center items-center">
                            {contributors.map((contributor) => <ContributorProfile img={contributor.img} name={contributor.name} />)}
                        </main>
                    </section>
                </main>
            </section>
        </Layout>
    );
}