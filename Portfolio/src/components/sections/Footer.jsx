export const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-red-700 via-orange-700 to-amber-700 text-white py-8 mt-10 shadow-[0_-2px_10px_rgba(255,99,71,0.25)]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <a href="#home" className="flex items-center space-x-2 font-mono text-xl font-bold">
                        <span>Abdullah <span className="text-black">Salman</span></span>
                    </a>

                    <div className="flex space-x-6 text-sm">
                        <a
                            href="#home"
                            className="hover:text-amber-200 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-amber-200 transition"
                        >
                            About
                        </a>
                        <a
                            href="#project"
                            className="hover:text-amber-200 transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-amber-200 transition"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-white/80">
                    © {new Date().getFullYear()} Abdullah Salman — All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
