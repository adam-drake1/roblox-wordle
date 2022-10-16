import Roact, { Children, Portal } from '@rbxts/roact'
import { hooked } from '@rbxts/roact-hooked'
import { Players } from '@rbxts/services'

const playerGui = Players.LocalPlayer.WaitForChild('PlayerGui')

interface Props {}

const Modal = hooked<Props>((props) => {
	return <Portal target={playerGui}>{...[props[Children]]}</Portal>
})

export default Modal
