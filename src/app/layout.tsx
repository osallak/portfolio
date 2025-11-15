import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oussama Sallak | Full-Stack & AI Engineer",
  description:
    "Full-Stack & AI Engineer specializing in AI agents, LangChain, MLOps, and intelligent systems. Building scalable AI-powered applications with Python, FastAPI, and modern web technologies.",
  authors: [{ name: "Oussama Sallak" }],
  keywords: [
    "Oussama Sallak",
    "AI Engineer",
    "MLOps",
    "LangChain",
    "AI Agents",
    "RAG",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "FastAPI",
    "Django",
    "React",
    "Next.js",
    "Software Engineer",
    "AI Integration",
    "Model Deployment",
  ],
  creator: "Oussama Sallak",
  icons: {
    icon: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/code-icon.svg"],
    apple: [
      {
        url: "/code-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Oussama Sallak | Full-Stack & AI Engineer",
    description:
      "Full-Stack & AI Engineer specializing in AI agents, LangChain, MLOps, and intelligent systems. Building scalable AI-powered applications with Python, FastAPI, and modern web technologies.",
    siteName: "Oussama Sallak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oussama Sallak | Full-Stack & AI Engineer",
    description:
      "Full-Stack & AI Engineer specializing in AI agents, LangChain, MLOps, and intelligent systems. Building scalable AI-powered applications with Python, FastAPI, and modern web technologies.",
    creator: "@OussamaSallak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CursorFollower />
          <ScrollProgress />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
