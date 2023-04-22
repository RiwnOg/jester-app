import Navbar from '@/navbar/Navbar';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Jester-App',
  description: 'Jester-App Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <div className='px-4'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
