import { Navbar } from "@/shared/Navbar";
import Mansion from "./components/models/Mansion";

function App() {
    return (
        <div className='h-screen bg-gray-800'>
            <Navbar />
            <Mansion />
        </div>
    );
}

export default App;