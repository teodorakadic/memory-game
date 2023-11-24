const EMOJI_SET = ['😺', '😸', '😻', '🙈', '🙉', '🙊', '⭐', '💫', '🌠']

export class CardClass {
	selected: boolean = false
	cleared: boolean = false
}

export type CardType = {
	selected: boolean
	cleared: boolean
}

export type Deck = CardType[]
