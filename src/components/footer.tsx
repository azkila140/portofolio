"use client"

import Link from "next/link"
import { personalInfo } from "@/lib/data"
import { useLanguage, getBilingualText } from "@/lib/i18n"

export function Footer() {
    const currentYear = new Date().getFullYear()
    const { language } = useLanguage()

    return (
        <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-16">
                {/* CTA Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            {language === "ar" ? "جاهز للتوسع؟" : "Ready to Scale?"}
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-2">
                        {getBilingualText(personalInfo.relocation, language)}
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                        {personalInfo.email}
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            {getBilingualText(personalInfo.name, language)}
                        </h3>
                        <p className="text-sm text-slate-400">
                            {getBilingualText(personalInfo.tagline, language)}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-200">
                            {language === "ar" ? "روابط سريعة" : "Quick Links"}
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                {language === "ar" ? "الرئيسية" : "Home"}
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                {language === "ar" ? "الأعمال" : "Portfolio"}
                            </Link>
                            <Link
                                href="/#work"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                {language === "ar" ? "المشاريع" : "Case Studies"}
                            </Link>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-200">
                            {language === "ar" ? "تواصل" : "Connect"}
                        </h4>
                        <div className="flex flex-col space-y-2">
                            <a
                                href={personalInfo.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                YouTube (@visionreset)
                            </a>
                            <a
                                href={personalInfo.social.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                TikTok (@cinestoriex)
                            </a>
                            <a
                                href={personalInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                Facebook (Cinestoriex)
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                    <p className="text-center text-sm text-slate-500">
                        © {currentYear} {getBilingualText(personalInfo.name, language)}.{" "}
                        {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
                    </p>
                </div>
            </div>
        </footer>
    )
}
