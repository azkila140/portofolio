"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { softwareProjects, mediaProjects } from "@/lib/data"
import { useLanguage, getBilingualText } from "@/lib/i18n"

export default function PortfolioPage() {
    const [filter, setFilter] = React.useState<"all" | "software" | "media">("all")
    const { language } = useLanguage()

    const allProjects = [
        ...softwareProjects.map(p => ({ ...p, type: 'software' as const })),
        ...mediaProjects.map(p => ({ ...p, type: 'media' as const }))
    ]

    const filteredProjects = filter === "all"
        ? allProjects
        : allProjects.filter((p) => p.type === filter)

    return (
        <div className="min-h-screen pt-32 pb-16 bg-slate-950">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            {language === "ar" ? "الأعمال" : "Portfolio"}
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        {language === "ar"
                            ? "مجموعة شاملة من أعمالي تشمل تطوير البرمجيات وإنشاء المحتوى الفيروسي"
                            : "A comprehensive collection of my work spanning software development and viral content creation"}
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    <Badge
                        onClick={() => setFilter("all")}
                        className={`cursor-pointer px-6 py-2 text-sm transition-all ${filter === "all"
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600"
                                : "bg-slate-800/50 border-slate-700 hover:border-yellow-400/50"
                            }`}
                    >
                        {language === "ar" ? "جميع المشاريع" : "All Projects"}
                    </Badge>
                    <Badge
                        onClick={() => setFilter("software")}
                        className={`cursor-pointer px-6 py-2 text-sm transition-all ${filter === "software"
                                ? "bg-gradient-to-r from-blue-400 to-blue-500 text-slate-950 hover:from-blue-500 hover:to-blue-600"
                                : "bg-slate-800/50 border-slate-700 hover:border-blue-400/50"
                            }`}
                    >
                        {language === "ar" ? "البرمجيات" : "Software"}
                    </Badge>
                    <Badge
                        onClick={() => setFilter("media")}
                        className={`cursor-pointer px-6 py-2 text-sm transition-all ${filter === "media"
                                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600"
                                : "bg-slate-800/50 border-slate-700 hover:border-yellow-400/50"
                            }`}
                    >
                        {language === "ar" ? "الإعلام" : "Media"}
                    </Badge>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className={`glass-dark border-white/10 hover:border-${project.type === 'software' ? 'blue' : 'yellow'}-400/30 transition-all duration-300 h-full`}>
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
                                    <CardDescription className={`text-${project.type === 'software' ? 'blue' : 'yellow'}-400`}>
                                        {getBilingualText('subtitle' in project ? project.subtitle : project.platform, language)}
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
                                                <div className={`text-lg font-bold text-${project.type === 'software' ? 'blue' : 'yellow'}-400`}>
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    {getBilingualText(metric.label, language)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className={`border-${project.type === 'software' ? 'blue' : 'yellow'}-400/30 text-${project.type === 'software' ? 'blue' : 'yellow'}-400 text-xs`}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-slate-400 text-lg">
                            {language === "ar" ? "لم يتم العثور على مشاريع في هذه الفئة" : "No projects found in this category"}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
