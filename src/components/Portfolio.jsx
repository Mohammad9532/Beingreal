export default function Portfolio() {
    return (
        <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-white">
            <div className="max-w-4xl mx-auto text-center reveal">
                <h2 className="text-[10px] md:text-xs uppercase tracking-widest text-muted-gold mb-12 md:mb-16 underline decoration-muted-gold/30 underline-offset-8">Portfolio & Work</h2>

                <div className="space-y-12">
                    <p className="text-xl md:text-3xl font-serif leading-relaxed text-charcoal/90">
                        BeingReal.in hosts the founder&apos;s personal portfolio, showcasing selected work
                        across systems, products, and financial structures.
                    </p>

                    <div className="w-12 md:w-16 h-px bg-muted-gold mx-auto opacity-50"></div>

                    <p className="text-base md:text-lg text-soft-gray font-light leading-relaxed max-w-2xl mx-auto">
                        For clients or collaborators who require it, separate portfolio pages or sub-domains
                        can be created&mdash;maintaining clarity, privacy, and brand consistency.
                    </p>

                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-charcoal/40 pt-12 md:pt-16">
                        The focus is always on outcomes and structure, not visual noise.
                    </p>
                </div>
            </div>
        </section>
    );
}
