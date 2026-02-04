import { HandshakeW600 } from '@material-symbols-svg/react-rounded/icons/handshake';
import { CorporateFareW600 } from '@material-symbols-svg/react-rounded/icons/corporate-fare';
import { ReactNode } from 'react';
import { BookmarkHeartW600 } from '@material-symbols-svg/react-rounded/icons/bookmark-heart';
import { LeaderboardW600 } from '@material-symbols-svg/react-rounded/icons/leaderboard';
import { AmpStoriesW600 } from '@material-symbols-svg/react-rounded/icons/amp-stories';
import { LocalActivityW600 } from '@material-symbols-svg/react-rounded/icons/local-activity';
import { CampaignW600 } from '@material-symbols-svg/react-rounded/icons/campaign';
import { SearchCheck2W600 } from '@material-symbols-svg/react-rounded/icons/search-check-2';
import { ParaglidingW600 } from '@material-symbols-svg/react-rounded/icons/paragliding';
import { MaterialSymbolsComponent } from '@material-symbols-svg/react-rounded';
import { CategorySearchW600 } from '@material-symbols-svg/react-rounded/icons/category-search';
import { MapPinReviewW600 } from '@material-symbols-svg/react-rounded/icons/map-pin-review';
import { NearMeW600 } from '@material-symbols-svg/react-rounded/icons/near-me';
import { PercentDiscountW600 } from '@material-symbols-svg/react-rounded/icons/percent-discount';
import { VillaW600 } from '@material-symbols-svg/react-rounded/icons/villa';

export type FeatureCardInfo = {
	title: string;
	description?: string;
	icon: MaterialSymbolsComponent;
	children?: ReactNode;
	className?: string;
};

export const forWhomCards: FeatureCardInfo[] = [
	{
		title: 'Para pequenos negócios e serviços',
		icon: HandshakeW600,
		children: (
			<ul className='list-disc list-inside text-muted-foreground'>
				<li>Pintores, eletricistas, pedreiros, diaristas</li>
				<li>Lojas pequenas, food trucks, lanchonetes</li>
				<li>Salões, barbearias, artesanato local</li>
				<li>E muito mais!</li>
			</ul>
		),
		className: 'bg-card/80',
	},
	{
		title: 'Para empresas estabelecidas e de renome',
		icon: CorporateFareW600,
		children: (
			<ul className='list-disc list-inside text-muted-foreground'>
				<li>Restaurantes, bares, pousadas e hotéis</li>
				<li>Clínicas, academias, lojas, turismo</li>
				<li>Produtores artesanais, indústrias, atacarejos</li>
			</ul>
		),
		className: 'bg-card/80',
	},
];

export const howItWorksCardsRow1: FeatureCardInfo[] = [
	{
		title: 'Localização',
		description: 'Empresas próximas ganham prioridade e contexto.',
		icon: NearMeW600,
		className: 'bg-card/85 basis-1/3',
	},
	{
		title: 'Categorias e intenção',
		description:
			'“Onde comer”, “onde dormir”, “serviços elétricos”, “onde comprar”, entre outros.',
		icon: CategorySearchW600,
		className: 'bg-card/85 basis-1/3',
	},
	{
		title: 'Filtros e interesses',
		description:
			'Pet friendly”, “aberto agora”, “delivery”, “esportes”, etc.',
		icon: MapPinReviewW600,
		className: 'bg-card/85 basis-1/3',
	},
];

export const howItWorksCardsRow2: FeatureCardInfo[] = [
	{
		title: 'Destaques por cidade',
		description: 'O que está relevante em Tianguá, Viçosa, Ubajara, etc.',
		icon: VillaW600,
		className: 'bg-card/85 basis-1/2',
	},
	{
		title: 'Eventos e promoções',
		description:
			'Lançamentos, inaugurações, festivais gastronômicos, liquidações…',
		icon: PercentDiscountW600,
		className: 'bg-card/85 basis-1/2',
	},
];

export const benefitsCardsRow1: FeatureCardInfo[] = [
	{
		title: 'Alcance de dois públicos ao mesmo tempo',
		description:
			'Moradores que querem resolver algo e turistas que chegam sem referência.',
		icon: ParaglidingW600,
		className: 'bg-card/85 basis-1/3',
	},
	{
		title: 'Visível no contexto certo',
		description:
			'Do “preciso resolver algo hoje” ao “o que tem pra fazer no final de semana”.',
		icon: SearchCheck2W600,
		className: 'bg-card/85 basis-1/3',
	},
	{
		title: 'Sem anúncios invasivos',
		description:
			'Sua empresa aparece por relevância real (local + interesse + plano).',
		icon: CampaignW600,
		className: 'bg-card/85 basis-1/3',
	},
];

export const benefitsCardsRow2: FeatureCardInfo[] = [
	{
		title: 'Engajamento que volta para você',
		description:
			'Usuários podem avaliar e favoritar, e quando você cria algo novo eles recebem aviso.',
		icon: BookmarkHeartW600,
		className: 'bg-card/85 basis-1/4',
	},
	{
		title: 'Métricas de verdade',
		description:
			'Veja visualizações, cliques, favoritos, eventos e retorno.',
		icon: LeaderboardW600,
		className: 'bg-card/85 basis-1/4',
	},
	{
		title: 'Página da empresa',
		description: 'Com informações organizadas, fotos e contato fácil.',
		icon: AmpStoriesW600,
		className: 'bg-card/85 basis-1/4',
	},
	{
		title: 'Crie eventos e ações comerciais',
		description:
			'Inaugurações, promoções, festivais, feiras, cursos e shows entram no calendário da cidade.',
		icon: LocalActivityW600,
		className: 'bg-card/85 basis-1/4',
	},
];
