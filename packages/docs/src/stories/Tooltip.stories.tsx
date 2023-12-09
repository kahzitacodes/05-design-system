import type { StoryObj, Meta } from '@storybook/react'
import { Button, Card, Tooltip, TooltipProps } from '@kahzita-ignite-ui/react'
import { Info } from 'phosphor-react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,

  args: {
    trigger: (
      <Button icon>
        <Info />
      </Button>
    ),
    children: 'Blank space',
  },

  argTypes: {
    trigger: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (story) => {
      return <Card>{story()}</Card>
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {
  args: {},
}

export const TextTrigger: StoryObj<TooltipProps> = {
  args: {
    trigger: (
      <span
        style={{ color: 'white', cursor: 'default', fontFamily: 'sans-serif' }}
      >
        Delicate
      </span>
    ),
    children: 'Is it cool that I said all that?',
  },
}
