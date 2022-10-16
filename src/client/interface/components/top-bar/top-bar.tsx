import Roact from '@rbxts/roact'
import { hooked } from '@rbxts/roact-hooked'
import ThemeButton from '../theme-button/theme-button'
import InfoButton from './info-button'

interface Props {}

const BUTTON_SIZE = new UDim2(0, 32, 1, 0)
const TopBar = hooked<Props>((props) => {
	return (
		<frame
			Size={new UDim2(1, -16, 0, 36)}
			BackgroundTransparency={1}
			Position={new UDim2(0, 16, 0, -36)}
		>
			<uilistlayout
				FillDirection={'Horizontal'}
				HorizontalAlignment={'Left'}
				VerticalAlignment={'Bottom'}
				Padding={new UDim(0, 12)}
			/>
			<frame Transparency={1} Size={BUTTON_SIZE} LayoutOrder={-1} />
			<frame Transparency={1} Size={BUTTON_SIZE} LayoutOrder={-1} />
			<ThemeButton />
			<InfoButton />
		</frame>
	)
})

export default TopBar
