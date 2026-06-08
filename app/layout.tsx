import type { Metadata } from "next";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RenovationBanner } from '@/components/RenovationBanner';
// import { Inter } from "next/font/google";
import "./styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Koreana Restaurant',
  description: 'A taste of Seoul in San Antonio!',
  icons: {
      icon: 'favicon.ico',
  },
  openGraph: {
    title: 'Koreana Restaurant',
    description: 'A taste of Seoul in San Antonio!',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RenovationBanner />
        <div id="root">{children}</div>
        <Footer/>
      </body>
    </html>
  );
};