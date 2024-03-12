import React from "react";
import {
    Card
} from "@/components/ui/card"


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="h-screen flex justify-center items-center">
            <Card className="w-96 bg-gray-50">
                {children}
            </Card>
        </section>
    );
}
