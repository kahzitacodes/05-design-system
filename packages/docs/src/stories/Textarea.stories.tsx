import type { StoryObj, Meta } from '@storybook/react'
import { Card, Textarea, TextareaProps, Text } from '@kahzita-ignite-ui/react'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  args: {},
  decorators: [
    (story) => {
      return (
        <Card
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {story()}
        </Card>
      )
    },
  ],
} as Meta<TextareaProps>

export const Default: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Type something',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}
