import ShoppingHeader from "./header";
import { Outlet } from "react-router-dom";
function ShoppingViewLayout() {
    return ( 
        <div className="flex flex-col overflow-hidden bg-white"> 
            {/* common header */}
            <ShoppingHeader />
            {/* main content */}
            <main className="flex-col flex w-full">
                <Outlet />

            </main>
            
        </div>
     );
}

export default ShoppingViewLayout;