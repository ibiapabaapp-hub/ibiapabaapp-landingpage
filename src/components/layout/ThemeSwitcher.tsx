'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ComputerW600 } from '@material-symbols-svg/react-rounded/icons/computer';
import { BedtimeW600 } from '@material-symbols-svg/react-rounded/icons/bedtime';
import { SunnyW600 } from '@material-symbols-svg/react-rounded/icons/sunny';

export default function ThemeSwitcher() {
	const { theme, setTheme, systemTheme } = useTheme();
	const [open, setOpen] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = mounted
		? theme === 'system'
			? systemTheme
			: theme
		: undefined;

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button size='icon' variant='ghost'>
					{!mounted ? (
						<ComputerW600 className='size-4' />
					) : currentTheme === 'dark' ? (
						<BedtimeW600 className='size-4' />
					) : currentTheme === 'light' ? (
						<SunnyW600 className='size-4' />
					) : (
						<ComputerW600 className='size-4' />
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-36'>
				<DropdownMenuItem
					onClick={() => {
						setTheme('system');
						setOpen(false);
					}}
				>
					<ComputerW600 className='mr-2 size-4' /> Sistema
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						setTheme('light');
						setOpen(false);
					}}
				>
					<SunnyW600 className='mr-2 size-4' /> Claro
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						setTheme('dark');
						setOpen(false);
					}}
				>
					<BedtimeW600 className='mr-2 size-4' /> Escuro
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
