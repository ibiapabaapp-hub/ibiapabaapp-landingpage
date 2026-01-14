import Image from 'next/image';
import Link from 'next/link';
import logo_horizontal from '../../assets/logo/ib-full-dark.svg';

export function Footer() {
	return (
		<footer className='w-full flex flex-col md:flex-row gap-6 p-6 bg-[#202220] items-center justify-between mt-16'>
			<div id='logo' className='flex gap-4 items-center text-sm'>
				<Image
					src={logo_horizontal}
					alt='IbiapabaApp logotype'
					width={174.01}
					height={28}
				/>
				<p className='max-w-48 dark:text-muted-foreground text-accent'>
					Todos os direitos reservados. IbiapabaApp, 2026.
				</p>
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
		</footer>
	);
}
