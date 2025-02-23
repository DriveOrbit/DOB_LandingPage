import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DriveOrbit',
  description: 'Fleet management solution',
  icons: {
    icon: [
      {
        url: 'https://avatars.githubusercontent.com/u/188688275?s=200&v=4',
        sizes: '200x200',
        type: 'image/png'
      }
    ],
    shortcut: [
      {
        url: 'https://avatars.githubusercontent.com/u/188688275?s=200&v=4',
        type: 'image/png'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('YOUR_IMAGE_URL')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}></div>
        {children}
      </body>
    </html>
  );
}