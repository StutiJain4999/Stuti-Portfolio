import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-stuti-mauve.vercel.app"),
  title: "Stuti Jain | Data Science & Engineering Portfolio",
  description: "Futuristic 3D portfolio of Stuti Jain, a Computer Science Engineering student specializing in Data Science, Data Analytics, and Power BI.",
  keywords: ["Stuti Jain", "Data Science", "Data Analytics", "Power BI", "Python", "SQL", "DBMS", "Java", "LPU", "Computer Science", "Next.js", "Three.js", "Framer Motion", "Portfolio"],
  authors: [{ name: "Stuti Jain" }],
  openGraph: {
    title: "Stuti Jain | Data Science & Engineering Portfolio",
    description: "Futuristic 3D portfolio of Stuti Jain, a Computer Science Engineering student specializing in Data Science, Data Analytics, and Power BI.",
    url: "https://portfolio-stuti-mauve.vercel.app",
    siteName: "Stuti Jain Portfolio",
    images: [
      {
        url: "/images/global-fuel-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Stuti Jain Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuti Jain | Data Science & Engineering Portfolio",
    description: "Futuristic 3D portfolio of Stuti Jain, a Computer Science Engineering student specializing in Data Science, Data Analytics, and Power BI.",
    images: ["/images/global-fuel-dashboard.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030303] text-[#f8fafc] flex flex-col selection:bg-cyan-500/30 selection:text-white">
        <SmoothScroll>
          <div className="noise-overlay" />
          <CustomCursor />
          <div className="flex-1 flex flex-col relative z-10">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
