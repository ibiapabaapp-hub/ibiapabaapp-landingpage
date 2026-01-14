'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CompassArrow() {
	const arrowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!arrowRef.current) return;

			const { left, top, width, height } =
				arrowRef.current.getBoundingClientRect();

			const centerX = left + width / 2;
			const centerY = top + height / 2;

			const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
			const degrees = angle * (180 / Math.PI);

			arrowRef.current.style.transform = `rotate(${degrees}deg)`;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div
			ref={arrowRef}
			style={{
				width: 36,
				height: 36,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				willChange: 'transform',
			}}
		>
			<Image
				src='/arrow-icon.svg'
				width={36}
				height={36}
				alt='IbiapabaApp arrow'
			/>
		</div>
	);
}
