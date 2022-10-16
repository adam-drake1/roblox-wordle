import { IPlayerGuessData } from 'types/interfaces/guess-types'
import { IGuessResponse } from 'types/interfaces/network-types'
import { PlayerEntity } from './data/player-entity'
import { analyzeGuess } from './guess/word-match'

/**
 * Compare the player's guess against their assigned word.
 * @param player The player that's guessing
 * @param guess The player's guess
 */
export function guessWord(entity: PlayerEntity, guess: string): IGuessResponse {
	const data = entity.data
	const gameState = data.gameState as IPlayerGuessData
	const response = analyzeGuess(guess, gameState)

	if (!response.success) {
		return response
	}

	entity.updateData({
		gameState: {
			guessCount: data.gameState.guessCount + 1,
			usedLetters: response.state.usedLetters,
			previousGuesses: [
				...gameState.previousGuesses,
				{
					word: guess,
					matches: response.matches,
					partials: response.partials,
				},
			],
		},
	})

	return response
}
