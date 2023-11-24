export type CardType = {
	selected: boolean
	cleared: boolean
}

export type Deck = CardType[]

export class CardClass {
	selected: boolean = false
	cleared: boolean = false
}
