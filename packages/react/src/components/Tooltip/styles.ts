import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  fontSize: '$sm',
  color: '$gray100',
  padding: '$3 $4',
  fontFamily: '$default',
})
