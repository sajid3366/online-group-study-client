
const Faq = () => {
    return (
        <div className=" max-w-7xl py-10 px-5 mx-auto mb-20">
        <h1 className="text-4xl font-bold mb-3 text-center">People Frequently <span className="text-red-600">Ask</span></h1>
        <hr className="mb-10 max-w-md mx-auto" />
        <div className="lg:flex gap-8 items-center">
            <div className="join join-vertical mb-3 w-3/4">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Why choose CarHant?
                    </div>
                    <div className="collapse-content">
                        <p>At Carhant, we redefine the car-buying experience with unmatched expertise, transparency, and customer satisfaction. Our extensive selection of quality vehicles undergoes rigorous inspections to ensure reliability. We prioritize your needs, offering personalized guidance, competitive prices, and flexible financing options. Our team of knowledgeable professionals is dedicated to providing exceptional service, from browsing to financing and beyond.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Is it safe to buy from CarHant?
                    </div>
                    <div className="collapse-content">
                        <p>Buying from CarHant can be safe if you do your due diligence. Research the company thoroughly, checking online reviews, customer testimonials, and their rating with reputable business bureaus. Ensure they are licensed and accredited. Before making any decisions, inspect the car carefully or have a trusted mechanic examine it. Ask for a detailed vehicle history report and review the terms of the sale, including warranties and return policies. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        CarHant is the best company in automotive?
                    </div>
                    <div className="collapse-content">
                        <p>CarHant is widely acclaimed as the pinnacle in the automotive sector. Renowned for impeccable customer service, top-notch vehicles, and transparent transactions, CarHant stands out. Its commitment to reliability, competitive pricing, and innovation has made it the trusted choice for discerning buyers, solidifying its reputation as the best in the industry.</p>
                    </div>
                </div>
            </div>
            <img className="lg:w-1/4 h-[70%]" src="https://i.ibb.co/xFvhf4d/jamie-street-Jt-P-Dqtz6-D8-unsplash.jpg" alt="" />
        </div>
    </div>
    );
};

export default Faq;
