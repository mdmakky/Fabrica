import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="min-h-screen w-full flex items-stretch text-white overflow-hidden">
            <div
                className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
                        
                }}
            >
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-center tracking-wide items-center">
                        Keep it special
                    </h1>
                    <p className="text-3xl my-4 text-center">
                        Capture your personal memory in a unique way, anywhere.
                    </p>
                </div>
            </div>
            <div
                className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
                style={{ backgroundColor: "#161616" }}
            >
                <div
                    className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
                    }}
                >
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-8 z-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
