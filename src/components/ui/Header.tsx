'use client'

type HeaderProps = {
  labelName: React.ReactNode
  className: string
}

export const Header: React.FC<HeaderProps> = ({ labelName, className }) => {
  return <h1 className={className}>{labelName}</h1>
}
