'use client'

type ButtonProps = {
  labelName: React.ReactNode
  onClick?: (e: any) => void
}

export const Button: React.FC<ButtonProps> = ({ labelName, onClick }) => {
  return <button onClick={onClick}>{labelName}</button>
}
