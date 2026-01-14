'use client';

import Image from 'next/image';

export function IbiapabaAppLogo() {
	return (
		<Image
			src={'/ib-dark.svg'}
			className='filter invert-0 dark:invert dark:hue-rotate-180'
			alt='logo'
			width={32}
			height={30.44}
			priority
		/>
	);
}
