export default function Services() {
    const services = [
        {
            title: "Advisory & System Design",
            desc: "We help founders and professionals bring order to complexity by designing repeatable, reliable systems—financial, operational, and digital—that reduce friction and improve decision-making."
        },
        {
            title: "Digital Products & Platforms",
            desc: "We build websites, dashboards, and internal tools with a focus on clarity, performance, and longevity. Every product is designed to scale quietly and age well."
        },
        {
            title: "Financial Structure & Compliance",
            desc: "We create financial systems that prioritise control, transparency, and confidence, enabling businesses to operate without surprises."
        }
    ];

    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-ivory">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[10px] md:text-xs uppercase tracking-widest text-muted-gold mb-12 md:mb-16 px-2">What We Do</h2>
                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="group border-l border-gray-200 pl-6 md:pl-8 py-4 transition-all hover:border-muted-gold reveal">
                            <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
                            <p className="text-sm md:text-base text-soft-gray font-light leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
