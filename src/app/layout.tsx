import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Polyger - Modern E-commerce',
  description: 'Your one-stop shop for everything',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">
          <Header />
          <main className="main-content container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}