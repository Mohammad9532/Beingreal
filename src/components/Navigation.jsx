"use client";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-ivory/90 backdrop-blur-md border-b border-gray-100/50 px-6 py-4 md:py-6 md:px-12">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full uppercase tracking-tighter">
                <a href="#hero" className="text-xl font-serif tracking-tight text-charcoal" onClick={() => setIsOpen(false)}>
                    BeingReal
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-12 items-center text-xs uppercase tracking-[0.2em] text-soft-gray">
                    <a href="#about" className="hover:text-charcoal transition-colors">About</a>
                    <a href="#work" className="hover:text-charcoal transition-colors">Work</a>
                    <a href="#contact" className="hover:text-charcoal transition-colors">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-charcoal p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-px bg-current mb-1.5 transition-all"></div>
                    <div className="w-6 h-px bg-current transition-all"></div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
        fixed inset-0 bg-ivory z-[60] flex flex-col items-center justify-center gap-12 transition-all duration-500 md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}>
                <button
                    className="absolute top-6 right-6 text-charcoal text-2xl"
                    onClick={() => setIsOpen(false)}
                >
                    &times;
                </button>
                <nav className="flex flex-col items-center gap-12 text-sm uppercase tracking-[0.4em] text-charcoal font-serif italic">
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </nav>
            </div>
        </nav>
    );
}
