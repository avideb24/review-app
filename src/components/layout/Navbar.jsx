import { Link } from "react-router-dom";
import Theme from "./Theme";


const Navbar = () => {
    return (
        <header className="bg-light dark:bg-dark py-4">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link to={"/"}>
                        <h3 className="text-2xl font-bold text-primary">
                            🛍️ Review Dibo
                        </h3>
                    </Link>

                    <Theme />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
