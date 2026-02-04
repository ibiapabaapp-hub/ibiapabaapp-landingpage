import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader } from './card';
import { LucideIcon } from 'lucide-react';
import { MaterialSymbolsComponent } from '@material-symbols-svg/react-rounded';

type FeatureCardProps = {
	title: string;
	description?: string;
	icon: LucideIcon | MaterialSymbolsComponent;
	className?: string;
} & PropsWithChildren;

export function FeatureCard({
	title,
	description,
	icon: Icon,
	className,
	children,
}: FeatureCardProps) {
	return (
		<Card className={'w-full gap-2 bg-muted' + ` ${className}`}>
			<CardHeader>
				<Icon className='size-7 text-primary' />
				<h3 className='font-medium text-sm md:text-base'>{title}</h3>
			</CardHeader>
			<CardContent>
				{description && (
					<p className='text-sm md:text-base text-muted-foreground'>
						{description}
					</p>
				)}
				{children}
			</CardContent>
		</Card>
	);
}
