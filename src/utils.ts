const EMOJI_SET = [
	'😺',
	'😸',
	'😻',
	'😽',
	'😹',
	'😼',
	'🙀',
	'🐈',
	'🐈‍⬛',
	'🧶',
	'🐠',
	'🧸',
	'🩷',
	'💗',
	'💖',
	'🩵',
	'💎',
	'🙉',
	'🙈',
	'🙊',
	'⭐',
	'💫',
	'🌠'
]

class CardClass {
	value: string
	selected: boolean
	cleared: boolean

	constructor(
		value: string,
		selected: boolean = false,
		cleared: boolean = false
	) {
		this.value = value
		this.selected = selected
		this.cleared = cleared
	}
}

export type CardType = {
	value: string
	selected: boolean
	cleared: boolean
}

export type DeckType = CardType[]

const shuffle = (array: any[]) => {
	let length = array.length

	while (length) {
		let i = Math.floor(Math.random() * length--)

		let temp = array[length]
		array[length] = array[i]
		array[i] = temp
	}

	return array
}

export const buildDeck = (numOfPairs: number) => {
	let emojis: string[] = []
	emojis = shuffle(EMOJI_SET).slice(0, numOfPairs)

	const deck: DeckType = []

	while (--numOfPairs >= 0) {
		deck.push(new CardClass(emojis[numOfPairs]))
		deck.push(new CardClass(emojis[numOfPairs]))
	}

	return shuffle(deck)
}
