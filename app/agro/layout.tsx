import type React from "react"
import "../globals.css"
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
  title: "Innovfuture Solutions - Premium Agro Products",
  description:
    "Discover our range of high-quality oils and agro products. Sourced from nature, delivered to your doorstep.",
}

export default function AgroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={`${poppins.variable} ${playfair.variable}`}>{children}</div>
}

