import Image from 'next/image';
import Link from 'next/link';
import logo_horizontal from '../../assets/logo/ib-full-dark.svg';
import { Button } from '../ui/button';
import { BusinessCenterW600 } from '@material-symbols-svg/react-rounded/icons/business-center';
import { NorthEastW600 } from '@material-symbols-svg/react-rounded/icons/north-east';
import { InstagramIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
export function Footer() {
	return (
		<footer className='w-full flex flex-col rounded-t-4 gap-8 p-8 bg-[#202220] mt-16'>
			<div
				id='block'
				className='flex flex-col md:flex-row items-start justify-between gap-6'
			>
				<h3 className='text-foreground text-xl md:max-w-lg'>
					Organizando o que a região tem de melhor,{' '}
					<span className='text-muted-foreground'>
						para quem vive, visita e empreende
					</span>
				</h3>

				<div
					id='actions'
					className='w-full flex flex-col gap-4 items-stretch md:items-end'
				>
					<Link href='#leads-form' className='w-full md:w-fit'>
						<Button
							size='lg'
							className='w-full md:w-fit cursor-pointer bg-foreground hover:bg-foreground/70 text-background text-wrap whitespace-break-spaces'
						>
							Quero entrar na lista de espera
							<NorthEastW600 className='size-5' />
						</Button>
					</Link>

					<Link href='/companies' className='w-full md:w-fit'>
						<Button
							size='lg'
							variant='outline'
							className='w-full md:w-fit cursor-pointer text-wrap whitespace-break-spaces'
						>
							<BusinessCenterW600 className='size-5' />
							Para empresas, negócios e organizações
						</Button>
					</Link>
				</div>
			</div>

			<Separator />

			<div
				id='infos'
				className='flex flex-col gap-6 items-center md:items-start'
			>
				<div
					id='logo-social-container'
					className='w-full flex flex-col md:flex-row gap-4 items-center md:items-start justify-between'
				>
					<div
						id='logo-container'
						className='flex flex-col items-center md:items-start gap-4'
					>
						<div id='logo' className='flex flex-col gap-6'>
							<Image
								src={logo_horizontal}
								alt='IbiapabaApp logotype'
								width={174.01}
								height={28}
							/>
						</div>

						<div
							id='links'
							className='dark:text-muted-foreground text-accent flex flex-wrap gap-4 text-sm'
						>
							<Link
								href='#header'
								className='hover:opacity-60 transition-opacity'
							>
								Voltar ao topo
							</Link>
							<Link
								href='#leads-form'
								className='hover:opacity-60 transition-opacity'
							>
								Formulário de interesse
							</Link>
						</div>
					</div>

					<div id='social' className='flex gap-4'>
						<Button
							size='icon'
							variant='secondary'
							className='cursor-pointer'
						>
							<InstagramIcon className='size-5' />
						</Button>
					</div>
				</div>

				<div
					id='special'
					className='w-full flex flex-col md:flex-row justify-between items-center'
				>
					<p>© 2026 – Todos os direitos reservados</p>
					{/* TODO: implementar política de privacidade
					
					<Link
						className='hover:opacity-60 transition-opacity'
						href='/'
					>
						Política de privacidade
					</Link> */}
				</div>
			</div>
		</footer>
	);
}
