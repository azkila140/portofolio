"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage, getBilingualText } from "@/lib/i18n"

const navItems = {
    en: [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Work", href: "/#work" },
        { name: "Contact", href: "/#contact" },
    ],
    ar: [
        { name: "الرئيسية", href: "/" },
        { name: "الأعمال", href: "/portfolio" },
        { name: "المشاريع", href: "/#work" },
        { name: "تواصل", href: "/#contact" },
    ],
}

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { scrollY } = useScroll()
    const { language } = useLanguage()

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.8)"]
    )

    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(16px)"]
    )

    const currentNavItems = navItems[language]

    return (
        <motion.nav
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
            }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.span
                            className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            {language === "ar" ? "المهدي" : "El Mehdi"}
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {currentNavItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button & Language Toggle - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageToggle />
                        <Button
                            asChild
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600 font-semibold"
                        >
                            <a href="/cv.pdf" download>
                                <Download className="w-4 h-4 mr-2" />
                                {language === "ar" ? "تحميل السيرة" : "Download CV"}
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-200"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-4">
                        {currentNavItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <LanguageToggle />
                        <Button
                            asChild
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600"
                        >
                            <a href="/cv.pdf" download onClick={() => setIsOpen(false)}>
                                <Download className="w-4 h-4 mr-2" />
                                {language === "ar" ? "تحميل السيرة" : "Download CV"}
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    )
}
