import { useNavigate } from "react-router-dom";
export default function CallTo() {
    const navigate = useNavigate();
    return (
        <>
            <style>
                {`
          @keyframes rotate {
            100% {
              transform: rotate(1turn);
            }
          }

          .rainbow::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: -50%;
            top: -50%;
            width: 200%;
            height: 200%;
            background-position: 100% 50%;
            background-repeat: no-repeat;
            background-size: 50% 30%;
            filter: blur(6px);
            background-image: linear-gradient(to right, #f0f, #0ff, #ff0);
            animation: rotate 4s linear infinite;
          }
        `}
            </style>

            <div className="mb-10 max-w-5xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-500/30">
                <div className="flex flex-col items-center justify-center text-center py-20 sm:py-28 md:py-16 rounded-[15px] bg-gradient-to-r from-[#F3EAFF] to-[#E1EFFF] min-h-[300px] sm:min-h-[400px]">
                    {/* Your content goes here */}
              


                    {/* Badge */}
                    <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.503 10.06a3.3 3.3 0 0 0-.88 1.809 4.7 4.7 0 0 0-.067 1.03v.545h.75q.416-.002.825-.075a3.24 3.24 0 0 0 1.81-.882 1.65 1.65 0 0 0-.131-2.325 1.65 1.65 0 0 0-2.307-.103m1.632 1.621a2.1 2.1 0 0 1-1.182.563h-.206v-.207a2.1 2.1 0 0 1 .563-1.18.34.34 0 0 1 .225-.076.63.63 0 0 1 .44.206.506.506 0 0 1 .16.694m9.6-9.581a.853.853 0 0 0-.835-.835A8.2 8.2 0 0 0 6.816 3.28L5.288 5.062l-2.25-.468a.94.94 0 0 0-.863.253l-.637.637a.94.94 0 0 0-.263.76.94.94 0 0 0 .422.693l1.931 1.238.122.075 3 3.047.075.075 1.238 1.931a.94.94 0 0 0 .693.422h.104a.94.94 0 0 0 .656-.272l.637-.637a.94.94 0 0 0 .253-.863l-.468-2.24 1.725-1.482A8.24 8.24 0 0 0 13.735 2.1M2.915 5.765l1.238.263-.6.703-.937-.628zm5.982 6.657-.628-.938.703-.6.263 1.238zm1.978-5.053-3.45 2.943-2.737-2.737 2.943-3.45a6.98 6.98 0 0 1 4.932-1.688 7 7 0 0 1-1.688 4.932"
                                fill="#5C67FF"
                            />
                            <path
                                d="M10.434 6.216a1.116 1.116 0 0 0-.056-1.594 1.086 1.086 0 0 0-1.918.742 1.1 1.1 0 0 0 .38.786 1.125 1.125 0 0 0 1.594.066"
                                fill="#5C67FF"
                            />
                        </svg>
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">
                            Portfolio Highlight
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-medium mt-2">
                        Build Your Dream Career <br />
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            With My Projects & Skills
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">
                        Explore my portfolio to see my work, skills, and achievements. Let's
                        connect to collaborate on exciting projects and opportunities.
                    </p>

                    {/* Call to Action Button */}
                    <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 mt-6">
                        <button
                            className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur"
                            onClick={() => navigate("/layout")}
                        >
                            View My Resume
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}
