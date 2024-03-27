import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/global/footer';
import ModalProvider from "@/providers/modal-provider";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Wuzzify",
  description: "Automate Your Work With Wuzzify 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
      <Footer />
    </html>
    </ClerkProvider>
  );
}
