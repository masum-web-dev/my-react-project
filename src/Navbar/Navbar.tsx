import logoText from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="container mx-auto">
                <div className="navbar px-4">
                    <div className="navbar-start">
                        <img src={logoText} alt="Logo" className="h-8 w-auto object-contain cursor-pointer" />
                    </div>
                    
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            <li><a className="text-pink-500 font-bold">Home</a></li>
                            <li><a>Technologies</a></li>
                            <li><a>Project</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="navbar-end flex items-center gap-4">
                        <a className="signIn cursor-pointer font-medium hover:text-pink-500 transition-colors">Sign In</a>
                        <a className="signUp bg-pink-500 rounded-md text-white px-4 py-2 cursor-pointer hover:bg-pink-600 transition-colors">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;