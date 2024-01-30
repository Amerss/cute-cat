import {router} from "@/route";
import {RouterProvider} from "react-router-dom";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback="...loading">
            <RouterProvider router={router}/>
        </Suspense>
    )
}

export default App
