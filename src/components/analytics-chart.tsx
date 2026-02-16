"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { month: "Jan", views: 4000, engagement: 2400, conversions: 400 },
    { month: "Feb", views: 3000, engagement: 1398, conversions: 300 },
    { month: "Mar", views: 2000, engagement: 9800, conversions: 500 },
    { month: "Apr", views: 2780, engagement: 3908, conversions: 450 },
    { month: "May", views: 1890, engagement: 4800, conversions: 380 },
    { month: "Jun", views: 2390, engagement: 3800, conversions: 420 },
    { month: "Jul", views: 3490, engagement: 4300, conversions: 550 },
]

interface AnalyticsChartProps {
    title?: string
    description?: string
    type?: "line" | "area"
}

export function AnalyticsChart({
    title = "Portfolio Analytics",
    description = "Monthly performance metrics",
    type = "area",
}: AnalyticsChartProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="glass-dark border-white/10">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        {type === "area" ? (
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="month" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Legend />
                                <Area
                                    type="monotone"
                                    dataKey="views"
                                    stroke="#3b82f6"
                                    fillOpacity={1}
                                    fill="url(#colorViews)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="engagement"
                                    stroke="#8b5cf6"
                                    fillOpacity={1}
                                    fill="url(#colorEngagement)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="conversions"
                                    stroke="#ec4899"
                                    fillOpacity={1}
                                    fill="url(#colorConversions)"
                                />
                            </AreaChart>
                        ) : (
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="month" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        borderRadius: "8px",
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="views"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    dot={{ fill: "#3b82f6" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="engagement"
                                    stroke="#8b5cf6"
                                    strokeWidth={2}
                                    dot={{ fill: "#8b5cf6" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="conversions"
                                    stroke="#ec4899"
                                    strokeWidth={2}
                                    dot={{ fill: "#ec4899" }}
                                />
                            </LineChart>
                        )}
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </motion.div>
    )
}
