export default function Contact() {
    return (
        <footer id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-charcoal text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24 mb-24 md:mb-32 reveal">
                    <div className="space-y-12 w-full md:w-auto">
                        <div>
                            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-gold mb-6 md:mb-8 opacity-60">General Enquiries</h2>
                            <a
                                href="mailto:support@beingreal.in"
                                className="text-xl md:text-4xl font-serif hover:text-muted-gold transition-colors block border-b border-white/5 pb-2 w-fit break-all"
                            >
                                support@beingreal.in
                            </a>
                        </div>
                        <div>
                            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-gold mb-6 md:mb-8 opacity-60">Accounting Services</h2>
                            <a
                                href="mailto:accounts@beingreal.in"
                                className="text-xl md:text-4xl font-serif hover:text-muted-gold transition-colors block border-b border-white/5 pb-2 w-fit break-all"
                            >
                                accounts@beingreal.in
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:text-right w-full md:w-auto">
                        <div>
                            <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-4">Ecosystem</p>
                            <nav className="flex flex-col md:items-end gap-4 text-[10px] md:text-xs font-light uppercase tracking-widest text-gray-300">
                                <a href="https://beingreal.in" className="hover:text-muted-gold transition-colors underline decoration-white/10 underline-offset-4">beingreal.in</a>
                                <a href="https://accounts.beingreal.in" className="hover:text-muted-gold transition-colors underline decoration-white/10 underline-offset-4">accounts.beingreal.in</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 reveal">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-serif tracking-tight mb-2">BeingReal</h3>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-light">Quiet execution. Durable systems.</p>
                    </div>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] text-center md:text-right">
                        &copy; {new Date().getFullYear()} BeingReal Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
