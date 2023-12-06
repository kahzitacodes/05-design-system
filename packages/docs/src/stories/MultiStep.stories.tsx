import type { StoryObj, Meta } from '@storybook/react'
import { Card, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Components/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (story) => {
      return <Card>{story()}</Card>
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
