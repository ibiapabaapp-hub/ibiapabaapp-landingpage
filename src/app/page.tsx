import { Header } from '@/components/layout/Header';
import { LeadsForm } from '@/components/fragments/LeadsForm';
import { Footer } from '@/components/layout/Footer';
import { FadeSection } from '@/components/layout/FadeSection';
import { Badge } from '@/components/ui/badge';
import { UsersHeroSection } from '@/components/fragments/UsersHeroSection';
import { FeatureCard } from '@/components/ui/feature-card';
import { HailW600 } from '@material-symbols-svg/react-rounded/icons/hail';
import {
	featureCityHighlightsCards,
	featureDiscoverCards,
	featureExploreCards,
} from './_page-content';

export default function UsersLanding() {
	return (
		<div className='flex flex-col min-h-dvh items-start justify-start'>
			<Header />
			<main className='flex min-h-full w-full flex-col lg:max-w-284 mx-auto items-start gap-24 justify-between p-6'>
				<UsersHeroSection />

				{/* Descubra o que é relevante para você */}
				<FadeSection
					id='feature-1'
					className='w-full rounded-xl flex flex-col justify-center items-center space-y-2'
				>
					<Badge variant={'default'} className='mb-4 gap-1'>
						<HailW600 className='size-5' />
						Para moradores e turistas
					</Badge>
					<h2 className='text-xl md:text-2xl font-semibold'>
						Descubra o que é relevante para você
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Seja um morador planejando o fim de semana ou um turista
						explorando a região, o app usa localização, interesses e
						categorias para mostrar:
					</p>

					<div className='mt-4 flex flex-col md:flex-row gap-4 w-full rounded-lg'>
						{featureDiscoverCards.map((card) => (
							<FeatureCard
								key={card.title}
								title={card.title}
								description={card.description}
								icon={card.icon}
								className={card.className}
							>
								{card.children}
							</FeatureCard>
						))}
					</div>

					<p className='mt-6 text-sm md:text-base text-muted-foreground'>
						Chega de procurar demais, encontre rápido e aproveite
					</p>
				</FadeSection>

				{/* Explore, salve e planeje */}
				<FadeSection
					id='feature-2'
					className='w-full rounded-xl flex flex-col justify-center items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						Explore, salve e planeje
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Achou algo legal? Não deixe passar.
					</p>

					<div className='mt-4 flex flex-col md:flex-row gap-4 w-full rounded-lg'>
						{featureExploreCards.map((card) => (
							<FeatureCard
								key={card.title}
								title={card.title}
								description={card.description}
								icon={card.icon}
								className={card.className}
							>
								{card.children}
							</FeatureCard>
						))}
					</div>
				</FadeSection>

				{/* O que está em destaque em cada cidade */}
				<FadeSection
					id='feature-3'
					className='w-full rounded-xl flex flex-col justify-center items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						O que está em destaque hoje em cada cidade
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						A Ibiapaba não é genérica, nosso app também não.
					</p>

					<div className='mt-4 flex flex-col md:flex-row gap-4 w-full rounded-lg'>
						{featureCityHighlightsCards.map((card) => (
							<FeatureCard
								key={card.title}
								title={card.title}
								description={card.description}
								icon={card.icon}
								className={card.className}
							>
								{card.children}
							</FeatureCard>
						))}
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
