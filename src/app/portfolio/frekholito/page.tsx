import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Frekholito - Portfolio Case Study",
    description: "Modern e-commerce platform with real-time inventory management and seamless checkout.",
}

export default function FrekholitoPage() {
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
                            Frekholito
                        </h1>
                        <p className="text-xl text-gray-300">
                            Modern e-commerce platform with real-time inventory management and seamless checkout.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge>React</Badge>
                            <Badge>Node.js</Badge>
                            <Badge>PostgreSQL</Badge>
                            <Badge>Stripe</Badge>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button asChild>
                                <a href="https://frekholito.com" target="_blank" rel="noopener noreferrer">
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

                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <Image
                            src="/images/frekholito.png"
                            alt="Frekholito Screenshot"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                                <p className="text-gray-300">
                                    Frekholito is a modern e-commerce platform built for scalability and performance.
                                    It features real-time inventory management, secure payment processing with Stripe,
                                    and an intuitive shopping experience.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                                <ul className="space-y-2 text-gray-300">
                                    <li>✓ Real-time inventory tracking and management</li>
                                    <li>✓ Secure payment processing with Stripe integration</li>
                                    <li>✓ Advanced product filtering and search</li>
                                    <li>✓ User accounts with order history</li>
                                    <li>✓ Admin dashboard for product and order management</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Technical Highlights</h2>
                                <p className="text-gray-300 mb-4">
                                    Built with React for a dynamic user interface and Node.js for a robust backend.
                                    PostgreSQL ensures reliable data storage, while Stripe handles secure payments.
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• RESTful API architecture with Express.js</li>
                                    <li>• Real-time updates using WebSockets</li>
                                    <li>• Optimistic UI updates for better UX</li>
                                    <li>• Comprehensive error handling and validation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/10">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">Results</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">95%</div>
                                        <div className="text-sm text-gray-400">Performance Score</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">10,000+</div>
                                        <div className="text-sm text-gray-400">Monthly Orders</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">99.9%</div>
                                        <div className="text-sm text-gray-400">Uptime</div>
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
