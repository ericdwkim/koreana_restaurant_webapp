import type { Metadata } from "next";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
// import { Inter } from "next/font/google";
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Koreana Restaurant',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div id="root">{children}</div>
        <Footer/>
      </body>
    </html>
  );
};