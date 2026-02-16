import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Automated Engine - Portfolio Case Study",
    description: "AI-powered automation engine for streamlining business workflows and processes.",
}

export default function AutomatedEnginePage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to Home
                    </Link>
                </Button>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                            Automated Engine
                        </h1>
                        <p className="text-xl text-gray-300">
                            AI-powered automation engine for streamlining business workflows and processes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Python</Badge>
                            <Badge>FastAPI</Badge>
                            <Badge>OpenAI</Badge>
                            <Badge>Docker</Badge>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button asChild variant="outline">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 w-4 h-4" />
                                    View Code
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <div className="text-6xl">🤖</div>
                            <p className="text-gray-400">AI Automation Platform</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                                <p className="text-gray-300">
                                    Automated Engine is an AI-powered platform that streamlines business workflows
                                    through intelligent automation. It leverages OpenAI's GPT models to understand
                                    and execute complex tasks, reducing manual work and increasing efficiency.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                                <ul className="space-y-2 text-gray-300">
                                    <li>✓ AI-powered task automation using GPT models</li>
                                    <li>✓ Custom workflow builder with visual interface</li>
                                    <li>✓ Integration with popular business tools</li>
                                    <li>✓ Real-time monitoring and analytics</li>
                                    <li>✓ Scalable architecture with Docker containers</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
                                <p className="text-gray-300 mb-4">
                                    Built with Python and FastAPI for high-performance API endpoints. OpenAI
                                    integration enables intelligent task processing. Docker ensures consistent
                                    deployment across environments.
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Asynchronous task processing with Celery</li>
                                    <li>• RESTful API with comprehensive documentation</li>
                                    <li>• Containerized deployment with Docker Compose</li>
                                    <li>• Comprehensive logging and error tracking</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">80%</div>
                                        <div className="text-sm text-gray-400">Time Saved</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">1,000+</div>
                                        <div className="text-sm text-gray-400">Tasks Automated</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">50+</div>
                                        <div className="text-sm text-gray-400">Integrations</div>
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
