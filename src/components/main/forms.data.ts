interface IForms {
	id: number
	img: string
	title: string
	oldPrice?: number
	price: number
	rate: number
}

export const headPhones: IForms[] = [
	{
		id: 1,
		img: '/public/appleBYZ.svg',
		price: 2327,
		oldPrice: 3527,
		rate: 4.7,
		title: 'Apple BYZ S852I',
	},
	{
		id: 2,
		img: '/public/earPods.svg',
		price: 2327,
		rate: 4.7,
		title: 'Apple EarPods',
	},
	{
		id: 3,
		img: '/public/earPodsBox.svg',
		price: 2327,
		rate: 4.7,
		title: 'Apple EarPods',
	},
	{
		id: 4,
		img: '/public/appleBYZ.svg',
		price: 2000,
		rate: 4.7,
		title: 'Apple BYZ S852I',
	},
	{
		id: 5,
		img: '/public/earPods.svg',
		price: 2327,
		rate: 4.7,
		title: 'Apple EarPods',
	},
	{
		id: 6,
		img: '/public/earPodsBox.svg',
		price: 2327,
		rate: 4.7,
		title: 'Apple EarPods',
	},
]

export const wirelesses: IForms[] = [
	{
		id: 1,
		img: '/public/airPods1.svg',
		price: 2000,
		rate: 4.7,
		title: 'Apple AirPods',
	},
	{
		id: 2,
		img: '/public/airPodsPro.svg',
		price: 2000,
		rate: 4.7,
		title: 'GERLAX GH-04',
	},
	{
		id: 3,
		img: '/public/headFone.svg',
		price: 2000,
		rate: 4.7,
		title: 'BOROFONE BO4',
	},
]
