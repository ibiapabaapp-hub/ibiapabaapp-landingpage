import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { NorthEastW600 } from '@material-symbols-svg/react-rounded/icons/north-east';
import { BusinessCenterW600 } from '@material-symbols-svg/react-rounded/icons/business-center';

export function UsersHeroSection() {
	return (
		<section
			id='hero'
			className='w-full flex flex-col items-start gap-20 md:items-center mb-10'
		>
			<div className='flex flex-col md:flex-row gap-16 items-center justify-center'>
				<div className='flex flex-col gap-4 items-center basis-1/2'>
					<h1 className='text-2xl md:text-4xl font-semibold text-center'>
						A Ibiapaba organizada, viva e do seu jeito
					</h1>

					<p className='text-muted-foreground text-sm md:text-base text-center'>
						Descubra onde ir, o que fazer e o que está acontecendo
						agora na Ibiapaba — com recomendações inteligentes e
						curadoria local para você
					</p>

					<p className='text-muted-foreground text-sm md:text-base text-center'>
						Em breve para iOS e Android
					</p>

					<Link href='#leads-form'>
						<Button size='lg' className='w-fit cursor-pointer'>
							Quero entrar na lista de espera
							<NorthEastW600 className='size-5' />
						</Button>
					</Link>

					<Link href='/companies'>
						<Button
							size='lg'
							variant='secondary'
							className='w-fit cursor-pointer'
						>
							<BusinessCenterW600 className='size-5' />
							Para empresas, negócios e organizações
						</Button>
					</Link>
				</div>

				<div className='relative w-fit overflow-hidden'>
					<Image
						className='w-full object-cover'
						src={'./hero.png'}
						width={395 - 32}
						height={575 - 32}
						alt='Screenshot of IbiapabaApp'
						priority
					/>
					<div className='pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background to-transparent' />
				</div>
			</div>
		</section>
	);
}
