import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Kartike Kishore - Portfolio Site",
  description: "Kartike Kishore space themed portfolio website",
  icons: {
    icon: '/favicon.ico', // or '/icon.png'
    // You can also add different sizes
    // apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}