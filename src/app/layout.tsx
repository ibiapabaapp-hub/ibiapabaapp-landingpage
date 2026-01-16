import type { Metadata } from 'next';
import { DM_Mono, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
});

const dmMono = DM_Mono({
	variable: '--font-dm-mono',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'IbiapabaApp - Descubra a Ibiapaba do seu jeito',
	description:
		'IbiapabaApp: descubra lugares, eventos e experiências na Ibiapaba com recomendações inteligentes e curadoria local.',
	keywords: [
		'Ibiapaba',
		'Serra da Ibiapaba',
		'turismo',
		'eventos',
		'Tianguá',
		'Ubajara',
		'São benedito',
		'Guaraciaba do norte',
		'empresas',
		'roteiros',
		'experiências locais',
		'guia da Ibiapaba',
	],
	authors: [{ name: 'IbiapabaApp', url: 'https://www.ibiapabaapp.com.br' }],
	creator: 'IbiapabaApp',
	robots: {
		index: true,
		follow: true,
		nocache: true,
	},
	openGraph: {
		title: 'IbiapabaApp - Descubra a Ibiapaba do seu jeito',
		description:
			'Explore lugares, eventos e experiências na Ibiapaba com recomendações personalizadas.',
		url: 'https://www.ibiapabaapp.com.br',
		siteName: 'IbiapabaApp',
		type: 'website',
		locale: 'pt_BR',
		images: [
			{
				url: 'https://www.ibiapabaapp.com.br/og.png',
				width: 1200,
				height: 630,
				alt: 'IbiapabaApp - Descubra a Ibiapaba',
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br' suppressHydrationWarning>
			<body
				className={`${dmSans.className} ${dmMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					{children}
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
