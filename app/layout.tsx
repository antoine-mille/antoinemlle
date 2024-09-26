import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/navigation"

import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio de Antoine Mille - Développeur Web",
  description: "Portfolio de Antoine Mille, développeur web fullstack",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={cn(poppins.className, "h-screen")}>
        <Header />
        {children}
        <Footer className="mt-12" />
      </body>
    </html>
  )
}
