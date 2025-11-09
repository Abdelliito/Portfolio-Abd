export const Project = () => {
    return (
        <section
            id="project"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2
                    className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 
                bg-clip-text text-transparent text-center"
                >
                    Featured Projects
                </h2>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                    <div
                        className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all w-full"
                    >
                        <h3 className="text-xl font-bold mb-2">Weather App</h3>
                        <p className="text-gray-400 mb-4">
                            Built an interactive Weather App with HTML, CSS, and JavaScript, utilizing the Fetch API
                            to deliver real-time weather updates and a responsive UI.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript", "Fetch API"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://weatherappbyabd.netlify.app/"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>

                    <div
                        className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all w-full"
                    >
                        <h3 className="text-xl font-bold mb-2">Calculator</h3>
                        <p className="text-gray-400 mb-4">
                            Built an interactive Calculator with HTML, CSS, and JavaScript, manipulating the DOM
                            to process calculations as fast as possible.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                                text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://calculatorbyabd.netlify.app/"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            View Project →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};
