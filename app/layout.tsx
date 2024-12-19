import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/segoeuithibd.ttf',
  variable: '--font-segoeui-san',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/segoeuithis.ttf',
  variable: '--font-segoeuui-mono',
  weight: '100 900',
});

const geistttf = localFont({
  src: './fonts/segoeuithisi.ttf',
  variable: '--font-segoeui-mono',
  weight: '100 900',
});

const geistttfiz = localFont({
  src: './fonts/segoeuithisz.ttf',
  variable: '--font-segoeui-tiz',
  weight: '100 900',
});

//Segoe

export const metadata: Metadata = {
  title: 'This is a ui test project',
  description: 'Generated using create next app by badmus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistttf.variable} ${geistttfiz.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
