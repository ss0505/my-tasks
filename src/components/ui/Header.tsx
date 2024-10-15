'use client'

import { HeaderProps } from '@/app/types/type'

export const Header: React.FC<HeaderProps> = ({ labelName, className }) => {
  return <h1 className={className}>{labelName}</h1>
}
