import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Ceilora | Transforming Spaces, Elevating Lifestyles',
  description: 'Where dreams take shape and bespoke interior design meets unparalleled craftsmanship. Professional residential and commercial interior design services based in Greater Noida, UP, India.',
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

