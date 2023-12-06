import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  transition: 'all .2s ease-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$brand500',

        '&:not(:disabled):hover': {
          backgroundColor: '$brand700',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          color: '$gray500',
        },
      },

      secondary: {
        color: '$brand300',
        border: '2px solid $brand500',

        '&:not(:disabled):hover': {
          backgroundColor: '$brand500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray500',
          borderColor: '$gray500',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$brand300',
        },

        '&:disabled': {
          color: '$gray500',
        },
      },
    },

    size: {
      sm: {
        padding: '0 $2',
        height: 36,
        minWidth: 80,
      },
      md: {
        padding: '0 $4',
        height: 44,
        minWidth: 120,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
