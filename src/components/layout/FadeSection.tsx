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

		gsap.from(el, {
			opacity: 0,
			y: 24,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 95%',
				toggleActions: 'play none none none',
			},
		});
	}, []);

	return (
		<section id={id} ref={ref} className={className}>
			{children}
		</section>
	);
}
