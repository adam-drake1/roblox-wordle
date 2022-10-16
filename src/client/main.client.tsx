import inspect from '@rbxts/inspect'
import Roact from '@rbxts/roact'
import { Players } from '@rbxts/services'
import remotes from 'shared/remotes'
import App from './interface/components/app/app'
import { ClientStore } from './interface/store/rodux'

// Get current word from the server and initialise store
remotes.Client.Get('getWord')
	.CallServerAsync(5)
	.then((response) => {
		ClientStore.dispatch({ type: 'setStateFromResponse', response })
	})

async function createUI() {
	const playerGui = Players.LocalPlayer.WaitForChild('PlayerGui') as PlayerGui

	const element = (
		<screengui IgnoreGuiInset={false}>
			<App />
		</screengui>
	)

	Roact.mount(element, playerGui)
}

createUI()
