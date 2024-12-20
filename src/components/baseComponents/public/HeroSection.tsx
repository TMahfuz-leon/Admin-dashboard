"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useProfile } from "@/lib/useProfile"

export default function HeroSection() {
    const { profile } = useProfile()
    return (
        <section className="w-full">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-6 pt-16 lg:pt-32 pb-10">
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Simplify, <span className="text-primary">Streamline,</span> and Scale Your E-<span className="text-primary">Commerce Business</span>
                    </h1>
                    <p className="mx-auto text-lg md:text-xl max-w-[700px] text-muted-foreground">
                        Unlock the power of our cutting-edge SaaS solution to streamline your operations, boost productivity, and
                        drive growth.
                    </p>
                    {
                        profile?.email ? <div className="mx-auto w-[150px] pt-4">
                            <Link href="/dashboard">
                                <Button size="lg" className="w-full font-bold">Dashboard</Button>
                            </Link>
                        </div> : <div className="mx-auto w-[150px] pt-4">
                            <Link href="/login">
                                <Button size="lg" className="w-full font-bold">Get Started</Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}