import type { Metadata } from 'next';
import './globals.css';
import { TourModeProvider } from '@/components/providers/TourModeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { FloatingNavbar } from '@/components/navigation/FloatingNavbar';
import { SiteFooter } from '@/components/footer/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://china-ai-tour.com'),
  title: 'China AI Tour | Private Executive Immersion Programs',
  description: 'China AI Tour designs private executive immersions for corporate teams, investors, universities and institutions worldwide – combining tailored company visits, expert briefings and strategic workshops around your sector and decisions.',
  openGraph: {
    title: 'China AI Tour | Private Executive Immersion Programs',
    description: "See China's AI Ecosystem in Action. Direct closed-door executive access to the teams building and deploying at global scale.",
    url: 'https://china-ai-tour.com',
    siteName: 'China AI Tour',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'China AI Tour',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/brand-mark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen bg-surface-cream text-ink">
        <LanguageProvider>
          <TourModeProvider>
            <FloatingNavbar />
            <main className="w-full">{children}</main>
            <SiteFooter />
          </TourModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
