import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "VisionReset - Portfolio Case Study",
    description: "A comprehensive vision therapy platform with interactive exercises and progress tracking.",
}

export default function VisionResetPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                {/* Hero */}
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                            VisionReset
                        </h1>
                        <p className="text-xl text-gray-300">
                            A comprehensive vision therapy platform with interactive exercises and progress tracking.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Next.js</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Supabase</Badge>
                            <Badge>Tailwind CSS</Badge>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button asChild>
                                <a href="https://visionreset.com" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 w-4 h-4" />
                                    View Live Site
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 w-4 h-4" />
                                    View Code
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <Image
                            src="/images/vision-reset.png"
                            alt="VisionReset Screenshot"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                                <p className="text-gray-300">
                                    VisionReset is a cutting-edge vision therapy platform designed to help users
                                    improve their visual skills through interactive exercises. The platform features
                                    real-time progress tracking, personalized exercise plans, and comprehensive
                                    analytics.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                                <ul className="space-y-2 text-gray-300">
                                    <li>✓ Interactive vision therapy exercises with real-time feedback</li>
                                    <li>✓ Personalized exercise plans based on user assessments</li>
                                    <li>✓ Comprehensive progress tracking and analytics dashboard</li>
                                    <li>✓ User authentication and profile management</li>
                                    <li>✓ Responsive design for desktop and mobile devices</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
                                <p className="text-gray-300 mb-4">
                                    Built with Next.js 14 and TypeScript for type-safe, performant code. Supabase
                                    provides real-time database capabilities and authentication. The UI is crafted
                                    with Tailwind CSS and Framer Motion for smooth animations.
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Server-side rendering for optimal SEO and performance</li>
                                    <li>• Real-time data synchronization with Supabase</li>
                                    <li>• Custom animation system using Framer Motion</li>
                                    <li>• Optimized images with Next.js Image component</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">98%</div>
                                        <div className="text-sm text-gray-400">Performance Score</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">5,000+</div>
                                        <div className="text-sm text-gray-400">Active Users</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">4.8/5</div>
                                        <div className="text-sm text-gray-400">User Rating</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
