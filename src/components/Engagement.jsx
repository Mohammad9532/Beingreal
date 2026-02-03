export default function Engagement() {
    const targets = [
        "Founders & entrepreneurs",
        "Small and growing businesses",
        "Professionals seeking structure and clarity"
    ];

    const model = [
        { title: "Selective", desc: "Intentional partnerships over volume." },
        { title: "Founder-led", desc: "Direct oversight and accountability on every project." },
        { title: "Long-term focused", desc: "Commitment to enduring systems." }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto space-y-40">
                {/* Who We Work With */}
                <div className="flex flex-col md:flex-row gap-20 items-start reveal">
                    <div className="md:w-1/2">
                        <h2 className="text-sm uppercase tracking-widest text-muted-gold mb-8">Who We Work With</h2>
                        <div className="space-y-6">
                            {targets.map((t, i) => (
                                <p key={i} className="text-3xl md:text-4xl font-serif text-charcoal/80 leading-tight border-b border-gray-50 pb-4">
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pt-20">
                        <p className="text-xl md:text-2xl text-soft-gray font-light italic leading-relaxed">
                            &ldquo;If you value long-term thinking over quick wins, you&rsquo;re in the right place.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Engagement Model */}
                <div className="flex flex-col md:flex-row gap-20 items-start reveal">
                    <div className="md:w-1/2">
                        <h2 className="text-sm uppercase tracking-widest text-muted-gold mb-8">Engagement Model</h2>
                        <p className="text-4xl font-serif leading-tight text-charcoal/90 mb-8 underline decoration-muted-gold/20 underline-offset-12">
                            Selective. Founder-led. Long-term focused.
                        </p>
                        <p className="text-lg text-soft-gray font-light leading-relaxed">
                            We work with a limited number of engagements to maintain quality, discretion, and accountability.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 gap-12">
                        {model.map((m, i) => (
                            <div key={i} className="group transition-all">
                                <h4 className="text-xs uppercase tracking-[0.3em] text-muted-gold mb-2 group-hover:tracking-[0.4em] transition-all">{m.title}</h4>
                                <p className="text-charcoal font-light leading-relaxed text-sm opacity-80">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
