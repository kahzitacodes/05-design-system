import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { Text } from '../Text'

const VIEWPORT_PADDING = 25

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$5',
  gap: '$2',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: ' translateX(0)' },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'flex',
  gap: '$1',
  flexDirection: 'column',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:[data-stata="close"]': {
    animation: `${hide} 100ms ease-in`,
  },
})

export const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ToastDescription = styled(Text, {
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  backgroundColor: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },
})
