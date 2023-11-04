
const Footer = () => {
    return (
        <div>
            <footer className="footer px-[150px] py-10 bg-neutral text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Car Sell</a>
                    <a className="link link-hover">Car Servicing</a>
                    <a className="link link-hover">Delivery</a>
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
            </footer>
            
        </div>
    );
};

export default Footer;