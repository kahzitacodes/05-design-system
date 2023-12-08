import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@kahzita-ignite-ui/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/kahzitacodes.png',
    alt: 'Karine Pereira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {
  args: {},
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
