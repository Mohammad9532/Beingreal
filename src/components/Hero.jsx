export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-ivory pt-20">
            <div className="max-w-7xl mx-auto w-full">
                <div className="fade-in">
                    <p className="text-muted-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 md:mb-8">Founder-Led Advisory & Digital Studio</p>
                    <h1 className="text-5xl md:text-9xl font-serif mb-8 md:mb-12 leading-[1.1] tracking-tighter">
                        BeingReal
                    </h1>
                    <div className="max-w-3xl space-y-8 md:space-y-12">
                        <p className="text-xl md:text-3xl font-light leading-relaxed text-charcoal/90">
                            We build structured systems, financial clarity, and digital foundations
                            for individuals and businesses that value precision over noise.
                        </p>
                        <p className="text-lg md:text-2xl text-soft-gray font-light italic leading-relaxed pt-4">
                            &ldquo;Built with intent. Maintained with integrity.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
