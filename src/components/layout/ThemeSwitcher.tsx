'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { LaptopMinimalIcon, MoonIcon, SunIcon } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
						<LaptopMinimalIcon />
					) : currentTheme === 'dark' ? (
						<MoonIcon />
					) : currentTheme === 'light' ? (
						<SunIcon />
					) : (
						<LaptopMinimalIcon />
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
					<LaptopMinimalIcon className='mr-2 h-4 w-4' /> Sistema
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						setTheme('light');
						setOpen(false);
					}}
				>
					<SunIcon className='mr-2 h-4 w-4' /> Claro
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						setTheme('dark');
						setOpen(false);
					}}
				>
					<MoonIcon className='mr-2 h-4 w-4' /> Escuro
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
