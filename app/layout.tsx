import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Task Managing Web-Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Providers>{children}</Providers>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
