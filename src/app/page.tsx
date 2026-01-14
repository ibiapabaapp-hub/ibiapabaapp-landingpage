import { Button, buttonVariants } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { LeadsForm } from '@/components/fragments/LeadsForm';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import CompassArrow from '@/components/fragments/CompassArrow';
import { FadeSection } from '@/components/layout/FadeSection';

export default function Home() {
	return (
		<div className='flex flex-col min-h-dvh items-start justify-start'>
			<Header />
			<main className='flex min-h-full w-full flex-col lg:max-w-284 mx-auto items-start gap-16 justify-between p-6'>
				<section
					id='heading'
					className='w-full flex flex-col items-start gap-20 md:items-center mb-10'
				>
					<div className='flex flex-col gap-16 items-center justify-center max-w-124'>
						<div className='flex flex-col gap-4 items-center'>
							<CompassArrow />
							<h1 className='text-2xl md:text-4xl font-semibold text-center'>
								A Ibiapaba organizada, viva e do seu jeito
							</h1>
							<p className='text-muted-foreground text-sm md:text-base text-center'>
								Descubra onde ir, o que fazer e o que está
								acontecendo na Ibiapaba com recomendações
								inteligentes e curadoria local para você
							</p>

							<Link href='#leads-form'>
								<Button size='lg' className='w-fit'>
									Em breve
								</Button>
							</Link>

							<span className='text-center text-muted-foreground text-base'>
								Entre na{' '}
								<Link
									href='#leads-form'
									className={buttonVariants({
										variant: 'link',
										className: 'p-0! underline',
									})}
								>
									lista de espera
								</Link>{' '}
								e avisaremos assim que o app estiver pronto
							</span>
						</div>

						<div className='relative w-fit'>
							<Image
								className=''
								src={'./hero.png'}
								width={395}
								height={575}
								alt='Screenshot of IbiapabaApp'
								priority
							/>
							<div className='pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background to-transparent' />
						</div>
					</div>
				</section>

				<FadeSection
					id='feature-1'
					className='w-full p-6 rounded-xl flex flex-col justify-center items-start md:items-center space-y-2 bg-primary/5'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						O que importa para você, no momento certo
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Nada de listas genéricas. O app aprende com suas
						preferências para mostrar.
					</p>

					<div className='h-80 w-full bg-muted rounded-lg'></div>
				</FadeSection>

				<FadeSection
					id='feature-2'
					className='w-full flex flex-col justify-center items-start md:items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						Seus planos na Ibiapaba em um só lugar
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Transforme descobertas em planejamento.
					</p>

					<div className='h-80 w-full bg-muted rounded-lg'></div>
				</FadeSection>

				<FadeSection
					id='feature-3'
					className='w-full flex flex-col justify-center items-start md:items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						O que está em destaque hoje em cada cidade
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						A Serra não é genérica, nosso app também não.
					</p>

					<div className='h-80 w-full bg-muted rounded-lg'></div>
				</FadeSection>

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
