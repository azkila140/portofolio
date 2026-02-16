"use client"

import { useLanguage, getBilingualText } from "@/lib/i18n"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stats, personalInfo } from "@/lib/data"

export function HeroSection() {
    const { language } = useLanguage()
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=90"
                    alt="High-tech background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Headline */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                            I Engineer Software
                        </span>
                        <br />
                        <span className="text-white">& Viral Growth</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Senior Content Creator | Multimedia Producer | Visual Storyteller
                    </motion.p>

                    {/* Stats Bar */}
                    <motion.div
                        className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label.en}
                                className="glass-dark px-8 py-4 rounded-lg border border-white/10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-400 mt-1">{getBilingualText(stat.label, language)}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Button size="lg" asChild className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600 font-semibold group">
                            <a href="#work">
                                View My Work
                                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="glass border-white/20 hover:border-yellow-400/50">
                            <a href="#contact">
                                Get in Touch
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown className="w-6 h-6 text-slate-400" />
                </motion.div>
            </div>
        </section>
    )
}
