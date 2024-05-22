import type { Metadata } from "next";
import { Inter ,Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SellIcon from '@mui/icons-material/Sell';

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ 
  subsets: ["latin"],
  weight:['300','400','500','600','700']
 });


export const metadata: Metadata = {
  title: "ScrapeCart",
  description: "Track product prices effortlessly and save money on your online shoping.",
  icons: {
    icon:'assets/icons/logo.svg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} background`}>

        <main className=" max-w-10xl mx-auto ">
          <Navbar/>
        {children}
        </main>
        </body>
    </html>
  );
}
