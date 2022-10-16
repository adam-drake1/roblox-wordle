import Roact, { Children, JsxInstance, JsxInstanceProperties } from '@rbxts/roact'
import { hooked, Reducer, useMutable, useReducer } from '@rbxts/roact-hooked'

export type ControlState = 'Pressed' | 'Hover' | 'None'

type Action =
	| { type: 'MouseDown' }
	| { type: 'MouseUp' }
	| { type: 'MouseEnter' }
	| { type: 'MouseLeave' }

const reducer: Reducer<ControlState, Action> = (_, action) => {
	switch (action.type) {
		case 'MouseUp':
		case 'MouseEnter':
			return 'Hover'
		case 'MouseDown':
			return 'Pressed'
		default:
			return 'None'
	}
}

type P = Pick<
	JsxInstanceProperties<ImageButton>,
	'Size' | 'Position' | 'AnchorPoint' | 'BackgroundTransparency' | 'BackgroundColor3'
>

interface Props extends P {
	onStateChange: (oldState: ControlState, state: ControlState) => void
}

const Interactable = hooked<Props>((props) => {
	// const [state, dispatch] = useReducer(reducer, 'None')
	const state = useMutable<ControlState>('None')

	const update = (action: Action) => {
		const newState = reducer(undefined!, action)
		if (newState !== state.current) {
			props.onStateChange(state.current, newState)
			state.current = newState
		}
	}

	return (
		<imagebutton
			BorderSizePixel={0}
			AutoButtonColor={false}
			Size={props.Size}
			Position={props.Position}
			AnchorPoint={props.AnchorPoint}
			BackgroundTransparency={props.BackgroundTransparency}
			BackgroundColor3={props.BackgroundColor3}
			Event={{
				MouseEnter: () => update({ type: 'MouseEnter' }),
				MouseLeave: () => update({ type: 'MouseLeave' }),
				MouseButton1Down: () => update({ type: 'MouseDown' }),
				MouseButton1Up: () => update({ type: 'MouseUp' }),
			}}
		>
			{props[Children]}
		</imagebutton>
	)
})

export default Interactable
