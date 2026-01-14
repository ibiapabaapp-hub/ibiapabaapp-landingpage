'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IbiapabaAppLogos, IbiapabaAppLogoVariants } from '@/assets/logo';

type IbiapabaAppLogoProps = {
	className?: string;
	variant: IbiapabaAppLogoVariants;
};

export function IbiapabaAppLogo({ className, variant }: IbiapabaAppLogoProps) {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const { resolvedTheme } = useTheme();
	const themeKey = resolvedTheme === 'dark' ? 'dark' : 'light';

	useEffect(() => {
		const updateMount = () => {
			setIsMounted(true);
		};

		updateMount();
		return () => setIsMounted(false);
	}, []);

	const logo = IbiapabaAppLogos[variant];

	return isMounted ? (
		<Image
			src={logo.src[themeKey]}
			alt='logo'
			width={logo.width}
			height={logo.height}
			className={`${className} w-auto`}
			priority
		/>
	) : (
		<div className='w-37.25 h-6'></div>
	);
}
