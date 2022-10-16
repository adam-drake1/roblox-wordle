import Roact, { FunctionComponent } from '@rbxts/roact'
import { ValueOrBinding } from 'types/util/roact-types'

interface Props {
	padding: ValueOrBinding<UDim>
}

const UniformPadding: FunctionComponent<Props> = ({ padding }) => {
	return (
		<uipadding
			PaddingTop={padding}
			PaddingBottom={padding}
			PaddingLeft={padding}
			PaddingRight={padding}
		/>
	)
}

export default UniformPadding
