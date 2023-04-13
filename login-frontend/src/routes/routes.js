import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Menu</h1>
                <div>
                    <a href={'/login'}>Login</a>
                </div>
                <div>
                    <a href={'/signUp'}>Sign up</a>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>

        </>
    );
}
