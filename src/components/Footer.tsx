const Footer = () => {
    return (
        <footer className="bg-datasea-dark border-t border-datasea-border py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-datasea-cyan to-datasea-blue">DataSea</span>
                    <p className="text-sm text-datasea-muted mt-2">
                        © {new Date().getFullYear()} DataSea. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-sm text-datasea-muted hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-sm text-datasea-muted hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-sm text-datasea-muted hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
