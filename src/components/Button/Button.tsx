import { ComponentProps, ReactNode } from 'react';
import { ButtonContent } from "./style"

type ButtonProps = ComponentProps<'button'> & {
  text: String;
  icon?: ReactNode;
};

export default function Button({ text, icon, ...rest }: ButtonProps) {
  return (
    <ButtonContent {...rest}>
      {icon}
      {text}
    </ButtonContent>
  );
}