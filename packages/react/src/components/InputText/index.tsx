import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, InputTextContainer, Prefix } from './styles'

export interface InputTextProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const InputText = forwardRef<ElementRef<typeof Input>, InputTextProps>(
  ({ prefix, ...props }: InputTextProps, ref) => {
    return (
      <InputTextContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </InputTextContainer>
    )
  },
)

InputText.displayName = 'InputText'
