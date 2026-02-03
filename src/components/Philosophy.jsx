export default function Philosophy() {
    const beliefs = [
        "Simplicity is a form of luxury",
        "Systems outperform shortcuts",
        "Trust is built through consistency"
    ];

    return (
        <section className="py-32 md:py-48 px-6 md:px-12 bg-ivory text-center">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-24 md:space-y-32">
                    {beliefs.map((b, i) => (
                        <div key={i} className="reveal">
                            <p className="text-2xl md:text-5xl font-serif italic text-charcoal/90 leading-snug">
                                &ldquo;{b}&rdquo;
                            </p>
                        </div>
                    ))}

                    <div className="reveal pt-16 space-y-4 text-xs md:text-sm">
                        <p className="text-soft-gray font-light tracking-[0.1em]">No exaggerated claims.</p>
                        <p className="text-soft-gray font-light tracking-[0.1em]">No unnecessary complexity.</p>
                        <p className="text-charcoal font-medium tracking-[0.2em] uppercase">Only thoughtful execution.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
