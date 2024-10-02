import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header } from "@/components/navigation"

import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"

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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ namespace: "Metadata" })
  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={cn(poppins.className, "h-screen")}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex size-full flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
