'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

function ClientOnly({ children } : { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;
  
    return <>{children}</>;
  }
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <body className={inter.className}>
          <Suspense fallback={<div>Loading...</div>}>
          <ClientOnly>
          <Navbar />
              {children}
          </ClientOnly>
          </Suspense>
        </body>
      </html>
    );
  }
  
