import { useArgs } from '@storybook/preview-api'
import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  useToast,
} from '@kahzita-ignite-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,

  args: {
    title: 'Blank space',
    description: 'Nice to meet you where have you been?',
  },

  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },

  decorators: [],
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = (args: ToastProps) => {
  const [{ open }, updateArgs] = useArgs()
  const handleOpenChange = () => updateArgs({ open: !open })
  return (
    <ToastProvider>
      <Toast {...args} open={open} onOpenChange={handleOpenChange} />
    </ToastProvider>
  )
}

export const WithButton: StoryObj<ToastProps> = (args: ToastProps) => {
  return (
    <ToastProvider>
      <ToastWithButton {...args} />
    </ToastProvider>
  )
}

const ToastWithButton = (args: ToastProps) => {
  const { addToast } = useToast()

  return <Button onClick={() => addToast(args)}>Add Toast</Button>
}

Default.args = {}
WithButton.args = {}
