import { Inter as FontSans } from "next/font/google"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import Providers from "@/components/Providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
