import Layout from "@/shared/Layout"

export default function NotFound() {
    return (
        <Layout>
            <main className="min-h-screen flex flex-col justify-center items-center gap-8">
                <h1 className="text-6xl font-bold font-mono tracking-widest text-red-600">404</h1>
                <h2 className="text-4xl font-mono text-white tracking-wide">Not Found</h2>
            </main>
        </Layout>
    );
}