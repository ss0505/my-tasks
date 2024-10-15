export type Task = {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

export type ButtonProps = {
  labelName: React.ReactNode
  className: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type HeaderProps = {
  labelName: React.ReactNode
  className: string
}
