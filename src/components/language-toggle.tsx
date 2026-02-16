"use client"

import { useLanguage, type Language } from "@/lib/i18n"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en")
    }

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 hover:border-yellow-400/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Globe className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">
                {language === "en" ? "العربية" : "English"}
            </span>
        </motion.button>
    )
}
