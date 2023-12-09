import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@kahzita-ignite-ui/react'
import { ArrowRight, Info } from 'phosphor-react'

export default {
  title: 'Components/Button',
  component: Button,

  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
    icon: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    variant: 'tertiary',
  },
}

export const IconOnly: StoryObj<ButtonProps> = {
  args: {
    icon: true,
    size: 'md',
    children: (
      <>
        <Info />
      </>
    ),
  },
}
