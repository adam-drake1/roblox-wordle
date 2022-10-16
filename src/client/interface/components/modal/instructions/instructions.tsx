import Roact from '@rbxts/roact'
import { hooked, useContext, useState } from '@rbxts/roact-hooked'
import { ThemeContext } from 'client/interface/context/theme-context'
import UniformPadding from '../../common/uniform-padding'
import Tile from '../../tile'
import VerticalResizingText from './vertical-resizing-text'

const Examples = hooked((props) => {
	const { unlockedFont: fontColor } = useContext(ThemeContext)

	return (
		<frame Size={UDim2.fromScale(1, 0)} AutomaticSize={'Y'} BackgroundTransparency={1}>
			<uilistlayout Padding={new UDim(0, 24)} />
			<uipadding PaddingTop={new UDim(0, 14)} PaddingBottom={new UDim(0, 14)} />
			<VerticalResizingText message="<b>Examples</b>" fontColor={fontColor} />
			<frame AutomaticSize={'Y'} Size={new UDim2(1, 0, 0, 40)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 14)} />
				<frame Transparency={1} AutomaticSize={'Y'} Size={UDim2.fromScale(1, 0)}>
					<uigridlayout CellSize={UDim2.fromOffset(40, 40)} CellPadding={UDim2.fromOffset(3, 3)} />
					<Tile
						index={0}
						length={5}
						letter={'w'}
						locked={true}
						match={true}
						size={new Vector2(40, 40)}
					/>
					<Tile letter={'e'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'a'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'r'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'y'} size={new Vector2(40, 40)} canAnimate={false} />
				</frame>
				<VerticalResizingText
					message="The letter <b>W</b> is in the word and in the correct spot."
					fontColor={fontColor}
				/>
			</frame>
			<frame AutomaticSize={'Y'} Size={UDim2.fromScale(1, 0)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 14)} />
				<frame Transparency={1} AutomaticSize={'Y'} Size={UDim2.fromScale(1, 0)}>
					<uigridlayout CellSize={UDim2.fromOffset(40, 40)} CellPadding={UDim2.fromOffset(3, 3)} />
					<Tile letter={'p'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile
						index={0}
						length={5}
						letter={'i'}
						locked={true}
						partial={true}
						size={new Vector2(40, 40)}
					/>
					<Tile letter={'l'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'l'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'s'} size={new Vector2(40, 40)} canAnimate={false} />
				</frame>
				<VerticalResizingText
					message="The letter <b>I</b> is in the word but in the wrong spot."
					fontColor={fontColor}
				/>
			</frame>
			<frame AutomaticSize={'Y'} Size={UDim2.fromScale(1, 0)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 14)} />
				<frame Transparency={1} AutomaticSize={'Y'} Size={UDim2.fromScale(1, 0)}>
					<uigridlayout CellSize={UDim2.fromOffset(40, 40)} CellPadding={UDim2.fromOffset(3, 3)} />
					<Tile letter={'v'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'a'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'g'} size={new Vector2(40, 40)} canAnimate={false} />
					<Tile letter={'u'} locked={true} size={new Vector2(40, 40)} />
					<Tile letter={'e'} size={new Vector2(40, 40)} canAnimate={false} />
				</frame>
				<VerticalResizingText
					message="The letter <b>U</b> is not in the word in any spot."
					fontColor={fontColor}
				/>
			</frame>
		</frame>
	)
})

const PADDING = new UDim(0, 16)

interface Props {}

const InstructionsModal = hooked<Props>((props) => {
	const {
		default: backgroundColor,
		modalBorder,
		unlockedFont: fontColor,
		unlockedFont,
		filledBorder,
		modalOverlay,
	} = useContext(ThemeContext)

	const [isOpen, setIsOpen] = useState(true)

	if (!isOpen) {
		return <></>
	}

	return (
		<>
			<frame
				Size={UDim2.fromScale(2, 2)}
				Position={UDim2.fromScale(0.5, 0.5)}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={modalOverlay}
				Transparency={0.5}
			/>
			<frame
				Size={UDim2.fromScale(0.8, 1)}
				BackgroundColor3={backgroundColor}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
			>
				{modalBorder && <uistroke Thickness={1} Color={modalBorder} />}
				<UniformPadding padding={PADDING} />
				<uisizeconstraint MaxSize={new Vector2(500, 515)} />
				<uicorner CornerRadius={new UDim(0, 8)} />
				<scrollingframe
					Size={UDim2.fromScale(1, 1)}
					AutomaticCanvasSize={'Y'}
					CanvasSize={UDim2.fromScale(0, 0)}
					VerticalScrollBarInset={'ScrollBar'}
					ScrollingDirection={'Y'}
					ScrollBarThickness={8}
					BackgroundTransparency={1}
					BorderSizePixel={0}
					ScrollBarImageColor3={unlockedFont}
				>
					<uipadding PaddingLeft={new UDim(0, 1)} />
					<uilistlayout Padding={new UDim(0, 14)} />
					<VerticalResizingText
						message={'Guess the <b>WORDLE</b> in six tries.'}
						fontColor={fontColor}
					/>
					<VerticalResizingText
						message={'Each guess must be a valid five-letter word. Hit the enter button to submit.'}
						fontColor={fontColor}
					/>
					<VerticalResizingText
						fontColor={fontColor}
						message={
							'After each guess, the color of the tiles will change to show how close your guess was to the word.'
						}
					/>
					<frame Size={new UDim2(1, 0, 0, 1)} BorderSizePixel={0} BackgroundColor3={filledBorder} />
					<Examples />
					<frame Size={new UDim2(1, 0, 0, 1)} BorderSizePixel={0} BackgroundColor3={filledBorder} />
					<VerticalResizingText
						fontColor={fontColor}
						message={'Complete the <b>WORDLE</b> in fewer turns to earn more points!'}
					/>
				</scrollingframe>
				<textbutton
					Size={UDim2.fromOffset(24, 24)}
					Position={new UDim2(1, 4, 0, -4)}
					AnchorPoint={new Vector2(1, 0)}
					BackgroundTransparency={1}
					Text={'<b>X</b>'}
					RichText={true}
					Font={'Sarpanch'}
					TextScaled={true}
					TextColor3={unlockedFont}
					Event={{ Activated: () => setIsOpen(false) }}
				/>
			</frame>
		</>
	)
})

export default InstructionsModal
