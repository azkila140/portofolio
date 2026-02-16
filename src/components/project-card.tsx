"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { SoftwareProject } from "@/lib/data"
import { useLanguage, getBilingualText } from "@/lib/i18n"

interface ProjectCardProps {
    project: SoftwareProject
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { language } = useLanguage()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="h-full"
        >
            <Card className="h-full overflow-hidden group glass-dark border-white/5 hover:border-yellow-400/30 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={getBilingualText(project.title, language)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                            asChild
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-950 hover:from-yellow-500 hover:to-yellow-600"
                        >
                            <Link href={`/portfolio#${project.id}`}>
                                View Case Study
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <CardTitle className="text-2xl font-serif group-hover:text-yellow-400 transition-colors">
                                {getBilingualText(project.title, language)}
                            </CardTitle>
                            <p className="text-sm text-yellow-400/80 mt-1">{getBilingualText(project.subtitle, language)}</p>
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-yellow-400 transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                    <CardDescription className="text-base text-slate-300">
                        {getBilingualText(project.description, language)}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                        {project.metrics.map((metric) => (
                            <div key={metric.label.en} className="text-center">
                                <div className="text-lg font-bold text-yellow-400">{metric.value}</div>
                                <div className="text-xs text-slate-400">{getBilingualText(metric.label, language)}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-slate-800/50 border-slate-700">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
