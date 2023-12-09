import type { StoryObj, Meta } from '@storybook/react'
import { Card, InputText, InputTextProps, Text } from '@kahzita-ignite-ui/react'

export default {
  title: 'Components/InputText',
  component: InputText,
  args: {},
  decorators: [
    (story) => {
      return (
        <Card
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Username</Text>
          {story()}
        </Card>
      )
    },
  ],
} as Meta<InputTextProps>

export const Default: StoryObj<InputTextProps> = {
  args: {
    placeholder: 'Type something',
  },
}

export const WithPrefix: StoryObj<InputTextProps> = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: StoryObj<InputTextProps> = {
  args: {
    disabled: true,
  },
}
