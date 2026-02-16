"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-6xl font-serif font-bold text-yellow-500 mb-4">404</h1>
            <h2 className="text-2xl text-white mb-6">Page Not Found / الصفحة غير موجودة</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                The page you are looking for does not exist or has been moved.
                <br />
                الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            </p>
            <Button asChild className="bg-yellow-500 text-slate-950 hover:bg-yellow-400">
                <Link href="/">Return Home / العودة للرئيسية</Link>
            </Button>
        </div>
    )
}
