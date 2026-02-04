import { Header } from '@/components/layout/Header';
import { LeadsForm } from '@/components/fragments/LeadsForm';
import { Footer } from '@/components/layout/Footer';
import { FadeSection } from '@/components/layout/FadeSection';
import { Badge } from '@/components/ui/badge';
import { CompaniesHeroSection } from '@/components/fragments/CompaniesHeroSection';
import Image from 'next/image';
import { FeatureCard } from '@/components/ui/feature-card';
import { BusinessCenterW600 } from '@material-symbols-svg/react-rounded/icons/business-center';
import {
	forWhomCards,
	benefitsCardsRow1,
	benefitsCardsRow2,
	howItWorksCardsRow1,
	howItWorksCardsRow2,
} from './_page-content';

export default function CompaniesLanding() {
	return (
		<div className='bg-accent flex flex-col min-h-dvh items-start justify-start'>
			<Header />
			<main className='flex min-h-full w-full flex-col lg:max-w-284 mx-auto items-start gap-24 justify-between p-6'>
				<CompaniesHeroSection />

				{/* Por que colocar sua empresa aqui? */}
				<FadeSection
					id='feature-1'
					className='w-full flex flex-col md:flex-row gap-4'
				>
					<div className='bg-card/85 p-6 w-full rounded-xl flex flex-col justify-center items-start space-y-2 max-w-164'>
						<Badge variant={'default'} className='mb-4 gap-1'>
							<BusinessCenterW600 className='size-5' />
							Para empresas
						</Badge>
						<h2 className='text-xl md:text-2xl font-semibold'>
							Por que colocar sua empresa aqui?
						</h2>

						<p className='text-sm md:text-base'>
							Hoje, quem quer te encontrar pode ter dificuldade:
							cada cidade tem dezenas de serviços e comércios
							escondidos entre grupos de WhatsApp, redes sociais e
							indicações informais.
						</p>

						<p className='mt-2 text-sm md:text-base'>
							O nosso app organiza tudo, de forma justa e clara,
							para quem precisa consumir, contratar, comer, se
							hospedar ou se divertir.
						</p>
					</div>

					<div className='w-full flex items-center justify-center rounded-xl overflow-hidden bg-card/50 p-4'>
						<Image
							height={96}
							width={96}
							src={'./arrow-icon.svg'}
							alt='og'
						/>
					</div>
				</FadeSection>

				{/* Para quem é? */}
				<FadeSection
					id='feature-2'
					className='w-full rounded-xl flex flex-col justify-center items-start space-y-2'
				>
					<div className='w-full flex flex-col md:flex-row gap-2 justify-between items-center md:items-end'>
						<div className='flex flex-col items-center md:items-start gap-2'>
							<p className='text-sm md:text-base uppercase text-primary font-semibold'>
								Para quem é?
							</p>
							<h2 className='text-xl md:text-2xl font-semibold text-center'>
								Para todos que empreendem
							</h2>
						</div>

						<p className='text-sm text-foreground'>
							Não importa o tamanho ou segmento
						</p>
					</div>

					<div className='mt-4 flex flex-col md:flex-row gap-4 w-full rounded-lg'>
						{forWhomCards.map((card) => (
							<FeatureCard
								className={card.className}
								key={card.title}
								title={card.title}
								description={card.description}
								icon={card.icon}
							>
								{card.children}
							</FeatureCard>
						))}
					</div>
				</FadeSection>

				{/* Como funciona? */}
				<FadeSection
					id='feature-3'
					className='w-full rounded-xl flex flex-col justify-center items-start space-y-2'
				>
					<div className='w-full flex flex-col gap-2 justify-between items-center md:items-start	'>
						<p className='text-sm md:text-base uppercase text-primary font-semibold'>
							Como funciona?
						</p>
						<h2 className='text-xl md:text-2xl font-semibold text-center'>
							Sua empresa aparece para clientes no app através de:
						</h2>
					</div>

					<div className='mt-4 flex flex-col gap-4 w-full rounded-lg'>
						<div className='w-full flex flex-col md:flex-row gap-4'>
							{howItWorksCardsRow1.map((card) => (
								<FeatureCard
									key={card.title}
									className={card.className}
									title={card.title}
									description={card.description}
									icon={card.icon}
								>
									{card.children}
								</FeatureCard>
							))}
						</div>

						<div className='w-full flex flex-col md:flex-row gap-4'>
							{howItWorksCardsRow2.map((card) => (
								<FeatureCard
									key={card.title}
									className={card.className}
									title={card.title}
									description={card.description}
									icon={card.icon}
								>
									{card.children}
								</FeatureCard>
							))}
						</div>
					</div>
				</FadeSection>

				{/* Quais os benefícios? */}
				<FadeSection
					id='feature-2'
					className='w-full rounded-xl flex flex-col justify-center items-start space-y-2'
				>
					<div className='w-full flex flex-col md:flex-row gap-2 justify-between items-center md:items-end'>
						<div className='flex flex-col items-center md:items-start gap-2'>
							<p className='text-sm md:text-base uppercase text-primary font-semibold'>
								Quais os benefícios?
							</p>
							<h2 className='text-xl md:text-2xl font-semibold text-center'>
								Benefícios reais para sua empresa ou negócio
							</h2>
						</div>

						<p className='text-sm text-foreground'>
							Seja qual for o tamanho dela
						</p>
					</div>

					<div className='mt-4 flex flex-col gap-4 w-full rounded-lg'>
						<div className='w-full flex flex-col md:flex-row gap-4'>
							{benefitsCardsRow1.map((card) => (
								<FeatureCard
									key={card.title}
									className={card.className}
									title={card.title}
									description={card.description}
									icon={card.icon}
								>
									{card.children}
								</FeatureCard>
							))}
						</div>

						<div className='w-full flex flex-col md:flex-row gap-4'>
							{benefitsCardsRow2.map((card) => (
								<FeatureCard
									key={card.title}
									className={card.className}
									title={card.title}
									description={card.description}
									icon={card.icon}
								>
									{card.children}
								</FeatureCard>
							))}
						</div>
					</div>
				</FadeSection>

				{/* Formulário */}
				<FadeSection
					id='leads-form'
					className='w-full flex flex-col justify-center items-start md:items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						Faça parte desde o início
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Quer usar o app ou levar sua empresa para dentro da
						plataforma?
					</p>

					<LeadsForm />
				</FadeSection>
			</main>
			<Footer />
		</div>
	);
}
