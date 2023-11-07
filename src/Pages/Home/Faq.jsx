
const Faq = () => {
    return (
        <div className=" max-w-7xl mt-10 py-10 px-5 mx-auto mb-20">
        <h1 className="text-4xl font-bold mb-3 text-center">People Frequently <span className="text-red-600">Ask</span></h1>
        <hr className="mb-10 max-w-md mx-auto" />
        <div className="lg:flex gap-8 items-center">
            <div className="join join-vertical mb-3 w-3/4">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4"  />
                    <div className="collapse-title text-xl font-medium">
                        Why choose Study Corner?
                    </div>
                    <div className="collapse-content">
                        <p>Study Corner is an online study platform offering convenience, flexibility, and access to resources for students. It provides expert guidance, collaborative learning opportunities, and self-paced education. The platform offers regular feedback, cost-effectiveness, and enhanced technology, fostering a global community of learners. Students can access diverse study materials, submit assignments, and engage in interactive learning experiences.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How can I progress with Study Corner?
                    </div>
                    <div className="collapse-content">
                        <p>To progress with Study Corner, create an account, explore study materials, complete assignments, engage in discussions, seek support, manage your time effectively, utilize feedback, and stay consistent for continuous learning. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Study Corner is the best online platform for study?
                    </div>
                    <div className="collapse-content">
                        <p>Certainly! Yes, Study Corner is an online study platform that allows students to study and submit assignments. Whether it is the best platform depends on individual preferences, but it offers a convenient and interactive learning experience for many students.</p>
                    </div>
                </div>
            </div>
            <img className="lg:w-1/4 h-[70%]" src="https://i.ibb.co/xFvhf4d/jamie-street-Jt-P-Dqtz6-D8-unsplash.jpg" alt="" />
        </div>
    </div>
    );
};

export default Faq;
