export type WindowImageProps = {
    title: string,
    src: string,
};

export default function WindowImage(props: WindowImageProps) {
    return (
        <div className="flex flex-col w-full bg-black rounded-lg shadow-neon-md">
            <header className="relative flex flex-row bg-gray-800 p-2">
                <div className="flex justify-center items-center gap-2 mx-2">
                    <span className="bg-red-600 shadow rounded-full w-4 h-4"></span>
                    <span className="bg-yellow-600 shadow rounded-full w-4 h-4"></span>
                    <span className="bg-green-600 shadow rounded-full w-4 h-4"></span>
                    <span></span>
                </div>
                <h3 className="absolute w-full text-center">
                    {props.title}
                </h3>
            </header>
            <img src={props.src} alt={props.title} className="flex justify-center items-center h-64 object-cover" />
        </div>
    );
}