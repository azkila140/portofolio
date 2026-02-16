"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Sparkles, TrendingUp, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mediaProjects, softwareProjects, stats, personalInfo } from "@/lib/data"
import { useLanguage, getBilingualText } from "@/lib/i18n"

export default function HomePage() {
    const { language } = useLanguage()

    // Sort projects by priority
    const sortedMediaProjects = [...mediaProjects].sort((a, b) => a.priority - b.priority)
    const sortedSoftwareProjects = [...softwareProjects].sort((a, b) => a.priority - b.priority)

    return (
        <div className="relative bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=90"
                        alt="Cinematic tech background"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950" />
                </div>

                {/* Animated Orbs */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                                {getBilingualText(personalInfo.tagline, language)}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {getBilingualText(personalInfo.title, language)}
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
                                    key={stat.value}
                                    className="glass-dark px-8 py-4 rounded-lg border border-white/10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                                >
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400 mt-1">
                                        {getBilingualText(stat.label, language)}
                                    </div>
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
                                <a href="#media">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    {language === "ar" ? "شاهد المشاريع الإعلامية" : "View Media Projects"}
                                    <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="glass border-white/20 hover:border-yellow-400/50">
                                <a href="#contact">
                                    {language === "ar" ? "تواصل معي" : "Get in Touch"}
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Floating Profile Card - Premium Showcase */}
                    <motion.div
                        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-20"
                        initial={{ opacity: 0, x: 100, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 1.2, duration: 1, type: "spring" }}
                    >
                        <motion.div
                            className="relative group"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />

                            {/* Profile Photo with Golden Border */}
                            <div className="relative">
                                {/* Golden Border Frame */}
                                <div className="relative p-2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-2xl">
                                    <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/screenshots (3).jpg"
                                            alt={getBilingualText(personalInfo.name, language)}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-950 px-6 py-3 rounded-full border-2 border-yellow-400 shadow-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                >
                                    <p className="text-yellow-400 font-bold text-sm whitespace-nowrap">
                                        {language === "ar" ? "مطور + استراتيجي" : "Developer + Strategist"}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-6 h-6 text-slate-400" />
                    </motion.div>
                </div>
            </section>

            {/* About Section - The Hybrid Story */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="glass-dark p-12 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                                    <Code2 className="w-8 h-8 text-yellow-400" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                                        {language === "ar" ? "الخبرة المزدوجة" : "The Dual Expertise"}
                                    </h2>
                                    <p className="text-yellow-400">
                                        {language === "ar" ? "مهندس + استراتيجي" : "Engineer + Strategist"}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                {getBilingualText(personalInfo.bio, language)}
                            </p>

                            {language === "ar" && personalInfo.gccContext && (
                                <div className="mt-6 p-4 rounded-lg bg-blue-500/5 border border-blue-400/20">
                                    <p className="text-slate-300">
                                        {personalInfo.gccContext.ar}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">700M+</div>
                                    <div className="text-sm text-slate-400">
                                        {language === "ar" ? "مشاهدات عضوية" : "Organic Views"}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">15+</div>
                                    <div className="text-sm text-slate-400">
                                        {language === "ar" ? "سنوات خبرة" : "Years Experience"}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Code2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">20+</div>
                                    <div className="text-sm text-slate-400">
                                        {language === "ar" ? "مشاريع" : "Projects"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


        <section id="media" className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            {language === "ar" ? "المشاريع الإعلامية" : "Viral Media Projects"}
                        </span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        {language === "ar"
                            ? "قنوات محتوى فيروسي مع تركيز على المشاهدات والخوارزميات والمشاركة"
                            : "Viral content channels with focus on Views, Algorithms, and Engagement"}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {sortedMediaProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="glass-dark border-white/10 hover:border-yellow-400/30 transition-all duration-300 h-full">
                                <div className="relative h-48 overflow-hidden rounded-t-lg">
                                    <Image
                                        src={project.image}
                                        alt={getBilingualText(project.title, language)}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif text-white">
                                        {getBilingualText(project.title, language)}
                                    </CardTitle>
                                    <CardDescription className="text-yellow-400">
                                        {getBilingualText(project.platform, language)}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-300 text-sm">
                                        {getBilingualText(project.description, language)}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {project.metrics.map((metric) => (
                                            <div key={metric.value} className="text-center">
                                                <div className="text-lg font-bold text-yellow-400">{metric.value}</div>
                                                <div className="text-xs text-slate-500">
                                                    {getBilingualText(metric.label, language)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Strategy */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-slate-200">
                                            {language === "ar" ? "الاستراتيجية:" : "Strategy:"}
                                        </h4>
                                        <p className="text-xs text-slate-400">
                                            {getBilingualText(project.strategy, language)}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="border-yellow-400/30 text-yellow-400 text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    {/* Software Projects Section - Priority 2 */ }
    <section id="software" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                        {language === "ar" ? "المشاريع البرمجية" : "Software Projects"}
                    </span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    {language === "ar"
                        ? "البنية التحتية التقنية التي تدعم النمو"
                        : "The technical infrastructure that powers growth"}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sortedSoftwareProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="glass-dark border-white/10 hover:border-blue-400/30 transition-all duration-300 h-full">
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <Image
                                    src={project.image}
                                    alt={getBilingualText(project.title, language)}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif text-white">
                                    {getBilingualText(project.title, language)}
                                </CardTitle>
                                <CardDescription className="text-blue-400">
                                    {getBilingualText(project.subtitle, language)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-slate-300">
                                    {getBilingualText(project.description, language)}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4">
                                    {project.metrics.map((metric) => (
                                        <div key={metric.value} className="text-center">
                                            <div className="text-xl font-bold text-blue-400">{metric.value}</div>
                                            <div className="text-xs text-slate-500">
                                                {getBilingualText(metric.label, language)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-slate-200">
                                        {language === "ar" ? "الميزات الرئيسية:" : "Key Features:"}
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-sm text-slate-400 flex items-start">
                                                <span className="text-blue-400 mr-2">▸</span>
                                                {getBilingualText(highlight, language)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="border-blue-400/30 text-blue-400">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>

    {/* Technical Arsenal - STUNNING SHOWCASE */ }
    <section className="relative py-32 bg-slate-950 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-yellow-500/5" />
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
                    backgroundSize: '50px 50px'
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <motion.h2
                    className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                        {language === "ar" ? "الترسانة التقنية" : "Technical Arsenal"}
                    </span>
                </motion.h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    {language === "ar"
                        ? "مجموعة أدوات شاملة لبناء تطبيقات من الدرجة الأولى"
                        : "A comprehensive toolkit for building world-class applications"}
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: 3D Floating Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -100, rotateY: -30 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring" }}
                    className="flex justify-center"
                >
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Animated Rings */}
                        <motion.div
                            className="absolute inset-0 -z-10"
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30" style={{ transform: 'scale(1.3)' }} />
                            <div className="absolute inset-0 rounded-full border-2 border-purple-400/20" style={{ transform: 'scale(1.5)' }} />
                            <div className="absolute inset-0 rounded-full border-2 border-yellow-400/10" style={{ transform: 'scale(1.7)' }} />
                        </motion.div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 rounded-full blur-3xl opacity-40 animate-pulse" />

                        {/* Photo Frame with Gradient Border */}
                        <div className="relative p-1 bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 rounded-full shadow-2xl">
                            <div className="relative w-96 h-96 rounded-full overflow-hidden bg-slate-900">
                                <Image
                                    src="/images/screenshots (4).jpg"
                                    alt="Technical Expertise"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [-20, 20, -20],
                                    opacity: [0.2, 1, 0.2],
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6"
                >
                    {[
                        {
                            title: language === "ar" ? "إتقان الواجهة الأمامية" : "FRONTEND MASTERY",
                            icon: "⚡",
                            color: "yellow",
                            skills: ["Next.js 16 (Expert)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Zod Validation"]
                        },
                        {
                            title: language === "ar" ? "الخلفية والعمليات" : "BACKEND & DEVOPS",
                            icon: "🔧",
                            color: "blue",
                            skills: ["Node.js", "Supabase (PostgreSQL)", "Server Actions", "Docker", "CI/CD Pipelines", "Linux Administration"]
                        },
                        {
                            title: language === "ar" ? "القيمة التجارية" : "BUSINESS VALUE",
                            icon: "💼",
                            color: "green",
                            skills: ["WhatsApp API Integration", "CRM Automation", "Technical SEO", "Lead Generation Logic", "Sales Funnel Optimization"]
                        }
                    ].map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.2 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className={`glass-dark p-8 rounded-2xl border-2 border-${category.color}-400/30 hover:border-${category.color}-400/60 transition-all duration-300 group`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.span
                                    className="text-5xl"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {category.icon}
                                </motion.span>
                                <h3 className={`text-2xl font-bold text-${category.color}-400 group-hover:text-${category.color}-300 transition-colors`}>
                                    {category.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + index * 0.2 + skillIndex * 0.1 }}
                                        className="flex items-center gap-3 text-slate-300 group-hover:text-white transition-colors"
                                    >
                                        <span className={`w-2 h-2 rounded-full bg-${category.color}-400`} />
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>

    {/* CTA Section */ }
    <section id="contact" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center glass-dark p-12 rounded-2xl border border-white/10"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                        {language === "ar" ? "لنبني شيئًا عظيمًا" : "Let's Build Something Great"}
                    </span>
                </h2>
                <p className="text-xl text-slate-300 mb-2">
                    {getBilingualText(personalInfo.relocation, language)}
                </p>
                <p className="text-lg text-slate-400 mb-8">
                    {language === "ar"
                        ? "خبرة مزدوجة فريدة: استراتيجية المحتوى الفيروسي + البنية التحتية التقنية"
                        : "Unique dual expertise: Viral Content Strategy + Technical Infrastructure"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 font-semibold rounded-md hover:from-yellow-500 hover:to-yellow-600 transition-all"
                    >
                        {language === "ar" ? "تواصل معي" : "Get in Touch"}
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center justify-center px-8 py-3 glass border border-white/20 hover:border-yellow-400/50 text-white font-semibold rounded-md transition-all"
                    >
                        {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
        </div >
    )
}
