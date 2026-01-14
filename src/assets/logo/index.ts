import ib_icon_light from './ib-icon-light.svg';
import ib_icon_dark from './ib-icon-dark.svg';
import ib_full_dark from './ib-full-dark.svg';
import ib_full_light from './ib-full-light.svg';

export type IbiapabaAppLogoVariants = 'icon' | 'horizontal';

type IbiapabaAppLogoType = {
	width: number;
	height: number;
	src: { light: string; dark: string };
};

export const IbiapabaAppLogos: Record<
	IbiapabaAppLogoVariants,
	IbiapabaAppLogoType
> = {
	icon: {
		width: 382.71,
		height: 364,
		src: {
			light: ib_icon_light,
			dark: ib_icon_dark,
		},
	},
	horizontal: {
		width: 174.01,
		height: 28,
		src: {
			light: ib_full_light,
			dark: ib_full_dark,
		},
	},
};
