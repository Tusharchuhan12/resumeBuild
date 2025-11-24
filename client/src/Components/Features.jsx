import { useState } from "react";

const Features = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div id="Features" className="flex flex-col md:flex-row items-center justify-center gap-3">
                {/* Image/Portfolio Illustration */}
                <img
                    className="max-w-2xl w-full xl:-ml-32"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
                    alt="Portfolio Illustration"
                />

                {/* Features List */}
                <div
                    className="px-4 md:px-0 flex flex-col gap-4"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {/* Feature 1 */}
                    <div className="flex items-center gap-4 max-w-md p-6 rounded-xl border border-transparent transition-colors cursor-pointer bg-violet-100 border-violet-300 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-6 stroke-violet-600"
                        >
                            <path d="M12 2L12 12M6 6L12 12 18 6" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-700">Projects Showcase</h3>
                            <p className="text-lg text-slate-600 max-w-xs">
                                Explore the real projects I built to demonstrate my skills and creativity.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center gap-4 max-w-md p-6 rounded-xl border border-transparent transition-colors cursor-pointer hover:bg-green-100 hover:border-green-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-6 stroke-green-600"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-700">Skills & Expertise</h3>
                            <p className="text-lg text-slate-600 max-w-xs">
                                Highlighting my technical and professional skills with practical examples.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center gap-4 max-w-md p-6 rounded-xl border border-transparent transition-colors cursor-pointer hover:bg-orange-100 hover:border-orange-300">
                        <svg
                            className="size-6 stroke-orange-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12h18" />
                            <path d="M12 3v18" />
                        </svg>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-700">Achievements & Awards</h3>
                            <p className="text-lg text-slate-600 max-w-xs">
                                Showcasing certifications, accolades, and milestones from my career journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

         
        </>
    );
};

export default Features;
