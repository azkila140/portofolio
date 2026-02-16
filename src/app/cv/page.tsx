"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Download, Mail, MapPin, ExternalLink, Sparkles, TrendingUp, Code2, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage, getBilingualText } from "@/lib/i18n"
import { personalInfo } from "@/lib/data"
import Link from "next/link"

export default function CVPage() {
    const { language } = useLanguage()

    const cvData = {
        header: {
            title: {
                en: "Senior Full Stack Developer & IT Infrastructure Expert",
                ar: "مطور Full Stack أول وخبير البنية التحتية لتكنولوجيا المعلومات"
            },
            subtitle: {
                en: "15+ Years of High-Stakes Experience",
                ar: "أكثر من 15 عامًا من الخبرة عالية المخاطر"
            }
        },
        masterpiece: {
            title: { en: "Masterpiece Project", ar: "المشروع الرئيسي" },
            name: { en: "Dubai Prime Estates Platform", ar: "منصة دبي برايم استيتس" },
            subtitle: { en: "Enterprise Luxury Real Estate Platform", ar: "منصة عقارات فاخرة للمؤسسات" },
            description: {
                en: "An enterprise-grade luxury real estate platform built to demonstrate capabilities for high-end markets. Engineered as a 'Sales Machine' with automated lead routing, real-time analytics, and anti-cloning security.",
                ar: "منصة عقارات فاخرة على مستوى المؤسسات مبنية لإظهار القدرات للأسواق الراقية. مصممة كـ 'آلة مبيعات' مع توجيه تلقائي للعملاء المحتملين وتحليلات في الوقت الفعلي وأمان ضد الاستنساخ."
            },
            highlights: [
                { en: "Next.js 16 App Router for generic rendering", ar: "Next.js 16 App Router للعرض العام" },
                { en: "Anti-Cloning Middleware protection", ar: "حماية Middleware ضد الاستنساخ" },
                { en: "Intelligent Lead Routing logic", ar: "منطق توجيه ذكي للعملاء المحتملين" },
                { en: "100/100 Lighthouse Performance", ar: "أداء 100/100 في Lighthouse" },
            ],
            metrics: [
                { label: { en: "Load Time", ar: "وقت التحميل" }, value: "0.8s" },
                { label: { en: "Performance", ar: "الأداء" }, value: "100/100" },
                { label: { en: "Status", ar: "الحالة" }, value: "Healthy" },
            ],
            link: "https://realestatelikecandy.netlify.app/",
        },
        experience: [
            {
                title: {
                    en: "Independent Senior IT Consultant & Full Stack Developer",
                    ar: "مستشار تكنولوجيا معلومات أول مستقل ومطور Full Stack"
                },
                period: { en: "Operating as a 'One-Man Army'", ar: "العمل كـ 'جيش من رجل واحد'" },
                description: {
                    en: "Solving end-to-end technical challenges globally",
                    ar: "حل التحديات التقنية الشاملة عالميًا"
                },
                achievements: [
                    {
                        title: { en: "Web Application Development", ar: "تطوير تطبيقات الويب" },
                        description: {
                            en: "Designed and deployed 20+ custom web applications using MERN stack and Next.js, focusing heavily on conversion optimization and speed.",
                            ar: "صممت ونشرت أكثر من 20 تطبيق ويب مخصص باستخدام MERN stack وNext.js، مع التركيز بشكل كبير على تحسين التحويل والسرعة."
                        }
                    },
                    {
                        title: { en: "Infrastructure Management", ar: "إدارة البنية التحتية" },
                        description: {
                            en: "Managed complex cloud deployments on Vercel, AWS, and VPS. Handled DNS, SSL, and CI/CD pipelines ensuring zero-downtime updates.",
                            ar: "أدرت عمليات نشر سحابية معقدة على Vercel وAWS وVPS. تعاملت مع DNS وSSL وخطوط CI/CD لضمان تحديثات بدون توقف."
                        }
                    }
                ],
            },
            {
                title: {
                    en: "IT Support Specialist & Network Administrator",
                    ar: "أخصائي دعم تكنولوجيا المعلومات ومسؤول الشبكة"
                },
                period: { en: "Enterprise Experience", ar: "خبرة المؤسسات" },
                description: {
                    en: "Managed corporate IT infrastructure and provided Tier-3 support for enterprise clients",
                    ar: "أدرت البنية التحتية لتكنولوجيا المعلومات للشركات وقدمت دعم المستوى 3 لعملاء المؤسسات"
                },
                achievements: [],
            },
        ],
        skills: {
            frontend: {
                title: { en: "Frontend Mastery", ar: "إتقان الواجهة الأمامية" },
                items: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
            },
            backend: {
                title: { en: "Backend & DevOps", ar: "الخلفية وDevOps" },
                items: ["Node.js", "Supabase", "PostgreSQL", "Docker", "Vercel", "AWS", "CI/CD"],
            },
            business: {
                title: { en: "Business Value", ar: "القيمة التجارية" },
                items: ["Lead Generation", "Conversion Optimization", "Performance", "SEO", "Analytics", "Security"],
            },
        },
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Link href="/" className="inline-block mb-6 text-slate-400 hover:text-yellow-400 transition-colors">
                        ← {language === "ar" ? "العودة إلى الرئيسية" : "Back to Home"}
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                            El Mehdi Noreddine
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-200 mb-2">
                        {getBilingualText(cvData.header.title, language)}
                    </h2>

                    <p className="text-lg text-slate-400 mb-8">
                        {getBilingualText(cvData.header.subtitle, language)}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="mailto:sys.mehdi@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors">
                            <Mail className="w-4 h-4" />
                            sys.mehdi@gmail.com
                        </a>
                    </div>

                    <div className="flex justify-center gap-4">
                        <Button asChild className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600">
                            <a href="/El_Mehdi_Noreddine_CV.pdf" download>
                                <Download className="w-4 h-4 mr-2" />
                                {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
                            </a>
                        </Button>
                    </div>
                </motion.div>

                {/* Masterpiece Project */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-sm font-semibold text-yellow-400 mb-4 uppercase tracking-wider">
                        {getBilingualText(cvData.masterpiece.title, language)}
                    </h3>

                    <Card className="glass-dark border-yellow-400/20 overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-3xl font-serif text-white mb-2">
                                {getBilingualText(cvData.masterpiece.name, language)}
                            </CardTitle>
                            <p className="text-yellow-400">{getBilingualText(cvData.masterpiece.subtitle, language)}</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                {getBilingualText(cvData.masterpiece.description, language)}
                            </p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4">
                                {cvData.masterpiece.metrics.map((metric) => (
                                    <div key={metric.value} className="text-center p-4 rounded-lg bg-slate-900/50 border border-yellow-400/10">
                                        <div className="text-3xl font-bold text-yellow-400 mb-1">{metric.value}</div>
                                        <div className="text-xs text-slate-400">{getBilingualText(metric.label, language)}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-200 mb-3">
                                    {language === "ar" ? "المميزات التقنية:" : "Technical Highlights:"}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {cvData.masterpiece.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-300">
                                            <Sparkles className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                                            {getBilingualText(highlight, language)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button asChild variant="outline" className="border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10">
                                    <a href={cvData.masterpiece.link} target="_blank" rel="noopener noreferrer">
                                        {language === "ar" ? "شاهد العرض التوضيحي" : "Launch Live Demo"}
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/10">
                                    <a href="https://realestatelikecandy.netlify.app/performance" target="_blank" rel="noopener noreferrer">
                                        {language === "ar" ? "عرض التدقيق التقني" : "View Technical Audit"}
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </div>

                            {/* Real-time Badge */}
                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 border-t border-white/5 pt-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                {language === "ar" ? "النظام سليم" : "System Healthy"}
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* Professional Odyssey */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-serif font-bold text-white mb-8">
                        {language === "ar" ? "الرحلة المهنية" : "Professional Odyssey"}
                    </h3>

                    <div className="space-y-8">
                        {cvData.experience.map((job, idx) => (
                            <Card key={idx} className="glass-dark border-white/10">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <CardTitle className="text-xl font-serif text-white mb-2">
                                                {getBilingualText(job.title, language)}
                                            </CardTitle>
                                            <p className="text-sm text-slate-400">{getBilingualText(job.description, language)}</p>
                                        </div>
                                        <Badge variant="outline" className="border-yellow-400/30 text-yellow-400">
                                            {getBilingualText(job.period, language)}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                {job.achievements.length > 0 && (
                                    <CardContent>
                                        <div className="space-y-4">
                                            {job.achievements.map((achievement, i) => (
                                                <div key={i}>
                                                    <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
                                                        <Code2 className="w-4 h-4 text-blue-400" />
                                                        {getBilingualText(achievement.title, language)}
                                                    </h4>
                                                    <p className="text-sm text-slate-300 ml-6">
                                                        {getBilingualText(achievement.description, language)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                </motion.section>

                {/* Technical Arsenal */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-serif font-bold text-white mb-8">
                        {language === "ar" ? "الترسانة التقنية" : "Technical Arsenal"}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(cvData.skills).map(([key, skill]) => (
                            <Card key={key} className="glass-dark border-white/10">
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                                        {key === 'frontend' && <Globe2 className="w-5 h-5 text-blue-400" />}
                                        {key === 'backend' && <Code2 className="w-5 h-5 text-green-400" />}
                                        {key === 'business' && <TrendingUp className="w-5 h-5 text-yellow-400" />}
                                        {getBilingualText(skill.title, language)}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <Badge key={item} variant="outline" className="border-white/20 text-slate-300">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center glass-dark p-12 rounded-2xl border border-white/10"
                >
                    <h3 className="text-3xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            {language === "ar" ? "جاهز لنشر حلول عالية الأداء" : "Ready to Deploy High-Performance Solutions"}
                        </span>
                    </h3>
                    <p className="text-slate-400 mb-8">
                        {language === "ar"
                            ? "15+ عامًا من الخبرة في بناء تطبيقات ويب قابلة للتوسع وإدارة البنية التحتية المعقدة"
                            : "15+ years of experience building scalable web applications and managing complex infrastructure"}
                    </p>
                    <Button asChild size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600">
                        <a href="mailto:sys.mehdi@gmail.com">
                            <Mail className="w-4 h-4 mr-2" />
                            {language === "ar" ? "وظفني الآن" : "Hire Me Now"}
                        </a>
                    </Button>
                </motion.section>
            </div>
        </div>
    )
}
