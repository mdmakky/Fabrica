import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
    return (  
        <div className="felex min-h-screen w-full">
            {/* Sidebar */}
            <AdminSideBar />
            <div className="flex flex-1 flex-col">
                {/* admin header */}
                <AdminHeader />
                <main className="flex-1 flex bg-muted/40 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;