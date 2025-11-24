const Brand = () => {
    const companiesLogo = [
        { name: "Framer", logo: "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg", },
        { name: "Huawei", logo: "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg", },
        { name: "Instagram", logo: "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg", },
        { name: "Microsoft", logo: "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg", },
        { name: "Walmart", logo: "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg", }
    ];
    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll 15s linear infinite;
                }

                .marquee-inner-testimonials {
                    animation: marqueeScroll 35s linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}
            </style>
            <h3 className="text-base text-center text-slate-400 pb-14 font-medium">
                Trusting by leading brands, including —
            </h3>
            <div class="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                <div class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

                <div class="flex marquee-inner will-change-transform max-w-5xl mx-auto">
                    {[...companiesLogo, ...companiesLogo].map((company, index) => (
                        <img key={index} className="mx-11" src={company.logo} alt={company.name} />
                    ))}
                </div>

                <div class="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
}

export default Brand;