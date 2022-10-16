import Roact from '@rbxts/roact'
import { hooked, useState } from '@rbxts/roact-hooked'
import Interactable, { ControlState } from '../common/interactable'

interface Props {}

const InfoButton = hooked<Props>((props) => {
	print('render info button')

	const [state, setState] = useState<ControlState>('None')
	let theme = { color: new Color3(), transparency: 1 }

	if (state === 'Pressed') {
		theme = { color: new Color3(), transparency: 0.7 }
	} else if (state === 'Hover') {
		theme = { color: new Color3(1, 1, 1), transparency: 0.9 }
	}

	return (
		<Interactable
			onStateChange={(_, newState) => setState(newState)}
			Size={UDim2.fromOffset(32, 32)}
			Position={UDim2.fromScale(0, 1)}
			AnchorPoint={new Vector2(0, 1)}
			BackgroundTransparency={0.5}
			BackgroundColor3={new Color3()}
		>
			<uicorner CornerRadius={new UDim(0, 8)} />
			<textlabel
				Key="Icon"
				ZIndex={1}
				Position={UDim2.fromScale(0.5, 0.5)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Text="<b>?</b>"
				RichText={true}
				TextColor3={new Color3(1, 1, 1)}
				FontSize={'Size18'}
				BackgroundTransparency={1}
				BorderSizePixel={0}
			/>
			<frame
				Key="StateOverlay"
				ZIndex={2}
				Size={UDim2.fromScale(1, 1)}
				BackgroundColor3={theme.color}
				BackgroundTransparency={theme.transparency}
				BorderSizePixel={0}
			>
				<uicorner CornerRadius={new UDim(0, 8)} />
			</frame>
		</Interactable>
	)
})

export default InfoButton
