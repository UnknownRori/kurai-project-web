import {
  RouterProvider,
} from "react-router-dom";

import router from "./router/router";

function App() {
    return (
        <div className='min-h-screen bg-black'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;