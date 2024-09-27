import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header } from "@/components/navigation"

import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { DotPattern } from "@/components/magicui"

const poppins = Poppins({
  style: "normal",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

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
        <div className="flex size-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer className="mt-12" />
        </div>
      </body>
    </html>
  )
}
