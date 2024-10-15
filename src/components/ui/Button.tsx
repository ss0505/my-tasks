'use client'

type ButtonProps = {
  labelName: React.ReactNode
  className: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

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
