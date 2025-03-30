import type React from "react"
import "./globals.css"
import { Poppins, Playfair_Display } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "Innovfuture Solutions",
  description:
    "Discover our range of high-quality oils and agro products. Sourced from nature, delivered to your doorstep.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}



import './globals.css'