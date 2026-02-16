import type { Metadata } from "next"
import { Inter, Playfair_Display, Cairo, Tajawal } from "next/font/google"
import "@/styles/globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
})

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    variable: "--font-cairo",
})

const tajawal = Tajawal({
    subsets: ["arabic", "latin"],
    weight: ["400", "500", "700"],
    variable: "--font-tajawal",
})

export const metadata: Metadata = {
    metadataBase: new URL("https://example.com"),
    title: "El Mehdi Noreddine | Digital Growth Director & Content Strategist",
    description:
        "Digital Growth Director with 700M+ organic views. I engineer viral content strategies and build the technical infrastructure to scale. Bilingual expertise in English and Arabic markets.",
    keywords: [
        "Digital Growth Director",
        "Content Strategist",
        "700M Views",
        "Viral Content",
        "YouTube Growth",
        "TikTok Strategy",
        "Full-Stack Engineer",
        "Next.js",
        "Arabic Content",
        "MENA Market",
        "GCC Content Strategy",
    ],
    authors: [{ name: "El Mehdi Noreddine" }],
    openGraph: {
        title: "El Mehdi Noreddine | Digital Growth Director",
        description: "I Build Digital Empires. 700M+ Organic Views.",
        type: "website",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${playfair.variable} ${cairo.variable} ${tajawal.variable} font-sans antialiased bg-slate-950 text-white`}
            >
                <LanguageProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    )
}
