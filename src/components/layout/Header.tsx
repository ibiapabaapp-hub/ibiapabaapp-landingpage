import { Button } from '@/components/ui/button';
import { IbiapabaAppLogo } from './IbiapabaAppLogo';
import ThemeSwitcher from './ThemeSwitcher';

export function Header() {
	return (
		<header
			id='header'
			className='max-w-284 mx-auto w-full flex justify-between items-center p-6'
		>
			<IbiapabaAppLogo className='h-6 md:h-8' variant='icon' />

			<div className='flex gap-4'>
				<ThemeSwitcher />
				<a href='#leads-form'>
					<Button variant='outline'>Lista de espera</Button>
				</a>
			</div>
		</header>
	);
}
