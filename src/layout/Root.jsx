import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


const Root = () => {
    return (
        <div className="bg-light dark:bg-dark text-sm 2xl:text-lg text-dark dark:text-light">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;