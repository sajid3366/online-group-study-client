
const Footer = () => {
    return (
        <div>
            <footer className=" px-[150px] py-10 bg-neutral text-neutral-content">
                <div className="footer">

                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Online Study</a>
                        <a className="link link-hover">Assignment </a>
                        <a className="link link-hover">Self Study</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div className="text-center">
                        <header className="footer-title">Find Us</header>
                        <div className="flex gap-5">
                            <img className="w-[40px] h-[40px]" src="https://i.ibb.co/pfpG7f2/tw.png" alt="" />
                            <img className="w-[40px] h-[40px]" src="https://i.ibb.co/NpSvHkz/ig.png" alt="" />
                            <img className="w-[40px] h-[40px]" src="https://i.ibb.co/Nn9GsqY/fb.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="text-stone-400">
                    <hr  className=" max-w-2xl mx-auto font-thin mt-10"/>
                    <p className="mt-3 text-center">&copy;2023 | All rights reserved by Study Corner</p>
                    <p className="mt-3 text-center">Developed by Ahtesham Sajid</p>

                </div>
            </footer>


        </div>
    );
};

export default Footer;