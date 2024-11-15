import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans_Bengali } from 'next/font/google';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/App-sidebar";

const notoSansBengali = Noto_Sans_Bengali({ subsets: ['bengali'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body
        className={notoSansBengali.className}
      >
        <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="lg:ml-20 mx-10">
        {children}
        </div>
      </main>
    </SidebarProvider>
      </body>
    </html>
  );
}
