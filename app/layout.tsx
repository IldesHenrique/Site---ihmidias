import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IH Mídias | Estratégia e anúncios online',
  description: 'Estratégia, gestão de tráfego pago e criatividade para transformar mídia em crescimento real.',
  openGraph: {
    title: 'IH Mídias | Anúncios que movem negócios',
    description: 'Estratégia, criatividade e mídia paga para atrair as pessoas certas e gerar crescimento real.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'IH Mídias — anúncios que movem negócios' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IH Mídias | Anúncios que movem negócios',
    description: 'Estratégia, criatividade e mídia paga para atrair as pessoas certas e gerar crescimento real.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
