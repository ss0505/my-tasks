'use client'

import { ButtonProps } from '@/app/types/type'

export const Button: React.FC<ButtonProps> = ({
  labelName,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {labelName}
    </button>
  )
}
