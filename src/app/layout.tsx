import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../public/assets/css/globals.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/components/themes/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BelkaScope WebApp",
  description: "",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme>{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
