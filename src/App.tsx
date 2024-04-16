import {
    RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import router from "./router/router";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        return () => {
            toast.warn('Still in development!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        };
    }, []);

    return (
        <div className='min-h-screen bg-black grid grid-rows-[auto_1fr_auto]'>
            <RouterProvider router={router} />

            <ToastContainer />
        </div>
    );
}

export default App;