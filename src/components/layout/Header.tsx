import Link from 'next/link';
import { IbiapabaAppLogo } from './IbiapabaAppLogo';
import ThemeSwitcher from './ThemeSwitcher';

export function Header() {
	return (
		<header
			id='header'
			className='max-w-284 mx-auto w-full flex justify-between items-center p-6'
		>
			<Link href='/' className='hover:opacity-65 transition-opacity'>
				<IbiapabaAppLogo className='h-7' variant='icon' />
			</Link>

			<div className='flex gap-4'>
				<ThemeSwitcher />
			</div>
		</header>
	);
}
