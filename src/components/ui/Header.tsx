'use client'

type HeaderProps = {
  labelName: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ labelName }) => {
  return <h1>{labelName}</h1>
}
