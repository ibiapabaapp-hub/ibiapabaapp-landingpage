'use client';

import { ReactNode, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type FadeSectionProps = {
	children: ReactNode;
	className?: string;
	id?: string;
};

export function FadeSection({
	children,
	className = '',
	id = '',
}: FadeSectionProps) {
	const ref = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: 32,
					filter: 'blur(2px)',
					willChange: 'transform, opacity, filter',
				},
				{
					opacity: 1,
					y: 0,
					filter: 'blur(0px)',
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: el,
						start: 'top 90%',
						toggleActions: 'play none none none',
					},
					clearProps: 'filter,willChange',
				},
			);
		}, ref);

		return () => ctx.revert();
	}, []);

	return (
		<section id={id} ref={ref} className={className}>
			{children}
		</section>
	);
}
