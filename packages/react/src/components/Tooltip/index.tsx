import * as Base from '@radix-ui/react-tooltip'
import { ReactElement } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  trigger: ReactElement | JSX.Element
  children: string
}

export function Tooltip({ trigger, children }: TooltipProps) {
  return (
    <Base.Provider delayDuration={450}>
      <Base.Root>
        <Base.Trigger asChild>{trigger}</Base.Trigger>
        <Base.Portal>
          <TooltipContent sideOffset={5}>
            {children}
            <Base.Arrow />
          </TooltipContent>
        </Base.Portal>
      </Base.Root>
    </Base.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
