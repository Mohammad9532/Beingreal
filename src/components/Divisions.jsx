export default function Divisions() {
    const features = [
        "Accounting & bookkeeping",
        "GST registration & filings",
        "Financial reporting",
        "Compliance support"
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-charcoal text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
                <div className="w-full md:w-1/2 reveal">
                    <p className="text-muted-gold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4">Divisions</p>
                    <h2 className="text-4xl md:text-5xl font-serif mb-2">BeingReal Accounts</h2>
                    <p className="text-lg md:text-xl font-light text-gray-400 mb-12 italic tracking-wide">Accounting & Financial Systems</p>

                    <div className="space-y-4 mb-12">
                        <p className="text-gray-400 font-light text-sm">A dedicated vertical focused on:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-muted-gold rounded-full shrink-0"></span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-gray-500 font-light mb-12 text-base md:text-lg">
                        Designed for businesses that value discipline, accuracy, and peace of mind.
                    </p>

                    <a
                        href="https://accounts.beingreal.in"
                        target="_blank"
                        className="group w-full md:w-fit inline-flex items-center justify-center gap-4 border border-white/20 px-8 py-4 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all"
                    >
                        Visit Division <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>

                <div className="md:w-1/3 w-full aspect-square border border-white/10 flex items-center justify-center p-8 md:p-12 reveal delay-1">
                    <div className="text-center">
                        <p className="text-muted-gold text-6xl md:text-7xl font-serif italic mb-2 select-none">B/A</p>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600">Accounts Division</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
