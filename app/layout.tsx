import { SearchProvider } from '@/app/providers/SearchProvider';
import QueryProvider from '@/app/providers/WithQueryProvider';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ProfileProvider } from '@/app/providers/ProfileProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobs',
  description: 'Created by Anatolii Fenin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProfileProvider>
          <SearchProvider>
            <QueryProvider>
              <Navbar />
              {children}
            </QueryProvider>
          </SearchProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
