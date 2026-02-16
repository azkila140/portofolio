"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "ar"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    // Update document direction when language changes
    useEffect(() => {
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
        document.documentElement.lang = language
    }, [language])

    const dir = language === "ar" ? "rtl" : "ltr"

    // Simple translation function (will be used with bilingual data)
    const t = (key: string) => key

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}

// Helper function to get bilingual text
export function getBilingualText(text: { en: string; ar: string }, lang: Language): string {
    return text[lang]
}
