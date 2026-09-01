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
return (
  <html lang="pt-BR">
    <head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PH6VBRN');`,
        }}
      />
      {/* End Google Tag Manager */}
    </head>

    <body>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5PH6VBRN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {children}
    </body>
  </html>
);  
}
