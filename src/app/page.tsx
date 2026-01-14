import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { LeadsForm } from '@/components/fragments/LeadsForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
	return (
		<div className='flex flex-col min-h-dvh items-start justify-start'>
			<Header />
			<main className='flex min-h-full w-full flex-col lg:max-w-300 mx-auto items-start gap-16 justify-between p-6'>
				<section
					id='heading'
					className='w-full flex flex-col lg:flex-row items-start gap-20 md:items-center mb-10'
				>
					<div className='flex flex-col gap-4 items-center'>
						<h1 className='text-2xl md:text-3xl font-semibold text-center'>
							A Ibiapaba organizada, viva e do seu jeito
						</h1>

						<p className='text-muted-foreground text-[14px] md:text-base text-center'>
							Descubra o que fazer, onde ir e o que está
							acontecendo agora na Ibiapaba — com recomendações
							inteligentes, curadoria local e experiências que
							realmente fazem sentido para você.
						</p>

						<Button className='w-full md:w-fit'>
							Quero ser um dos primeiros a saber
						</Button>
					</div>

					<div className='h-116 w-full bg-muted rounded-lg'></div>
				</section>

				<section
					id='feature-1'
					className='w-full flex flex-col justify-center items-start md:items-center space-y-2'
				>
					<h2 className='text-xl md:text-2xl font-semibold'>
						O que importa para você, no momento certo
					</h2>

					<p className='text-muted-foreground text-[14px] md:text-base'>
						Nada de listas genéricas. O app aprende com suas
						preferências para mostrar.
					</p>

					<div className='h-80 w-full bg-muted rounded-lg'></div>
				</section>

				<section
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
				</section>

				<section
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
				</section>

				<section
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
				</section>
			</main>
			<Footer />
		</div>
	);
}
