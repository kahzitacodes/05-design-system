import { ComponentProps } from 'react'
import { Input, InputTextContainer, Prefix } from './styles'

export interface InputTextProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function InputText({ prefix, ...props }: InputTextProps) {
  return (
    <InputTextContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </InputTextContainer>
  )
}

InputText.displayName = 'InputText'
