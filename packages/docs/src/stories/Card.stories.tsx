import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps, Text } from '@ignite-ui/react'

export default {
  title: 'Components/Card',
  component: Card,

  args: {
    children: (
      <>
        <Text>Testando o elemento Card</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
  args: {},
}
