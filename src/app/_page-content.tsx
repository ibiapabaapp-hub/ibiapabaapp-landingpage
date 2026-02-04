import { FeatureCardInfo } from './companies/_page-content';
import { MapSearchW600 } from '@material-symbols-svg/react-rounded/icons/map-search';
import { MoodW600 } from '@material-symbols-svg/react-rounded/icons/mood';
import { PersonPinCircleW600 } from '@material-symbols-svg/react-rounded/icons/person-pin-circle';
import { FavoriteW600 } from '@material-symbols-svg/react-rounded/icons/favorite';
import { NotificationsUnreadW600 } from '@material-symbols-svg/react-rounded/icons/notifications-unread';
import { CalendarCheckW600 } from '@material-symbols-svg/react-rounded/icons/calendar-check';
import { DiamondShineW600 } from '@material-symbols-svg/react-rounded/icons/diamond-shine';
import { LocalFireDepartmentW600 } from '@material-symbols-svg/react-rounded/icons/local-fire-department';
import { EventNoteW600 } from '@material-symbols-svg/react-rounded/icons/event-note';

export const featureDiscoverCards: FeatureCardInfo[] = [
	{
		title: 'Eventos e empresas perto de você',
		description:
			'Descubra shows, eventos culturais, atividades esportivas, empresas com promoções e muito mais. Tudo sem procurar em redes sociais.',
		icon: PersonPinCircleW600,
		className: 'bg-muted/60',
	},
	{
		title: 'Recomendações baseadas no seu interesse',
		description:
			'Encontre restaurantes, pousadas, serviços e atrações que fazem sentido para o seu momento, seja turismo ou vida local.',
		icon: MoodW600,
		className: 'bg-muted/60',
	},
	{
		title: 'Destaques por localização',
		description:
			'Todo dia o app evidencia o que está mais relevante na sua cidade ou onde você estiver, facilitando a descoberta.',
		icon: MapSearchW600,
		className: 'bg-muted/60',
	},
];

export const featureExploreCards: FeatureCardInfo[] = [
	{
		title: 'Salve favoritos',
		description:
			'Marque eventos e lugares que você curtiu para acessar depois e não perder oportunidades.',
		icon: FavoriteW600,
		className: 'bg-muted/60',
	},
	{
		title: 'Receba novidades automáticas',
		description:
			'Se algo muda ou surge (ex: novo evento da empresa, atualização de data, promoções ou novidades), você é avisado.',
		icon: NotificationsUnreadW600,
		className: 'bg-muted/60',
	},
	{
		title: 'Adicione à sua agenda',
		description:
			'Quando o interesse virar plano, envie para a agenda pessoal e não perca o dia.',
		icon: CalendarCheckW600,
		className: 'bg-muted/60',
	},
];

export const featureCityHighlightsCards: FeatureCardInfo[] = [
	{
		title: 'Destaques da semana',
		description:
			'O que está mais interessante para aproveitar agora, sem precisar pesquisar.',
		icon: DiamondShineW600,
		className: 'bg-muted/60',
	},
	{
		title: 'O que está bombando em cada cidade',
		description:
			'De Frecheirinha até Ipu, cada cidade com seus próprios destaques.',
		icon: LocalFireDepartmentW600,
		className: 'bg-muted/60',
	},
	{
		title: 'Calendário por cidade',
		description:
			'Veja os eventos já cadastrados distribuídos por data, facilitando o planejamento do que fazer nos próximos dias.',
		icon: EventNoteW600,
		className: 'bg-muted/60',
	},
];
