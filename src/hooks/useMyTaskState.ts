import { myTaskState } from '@/atoms/myTaskState'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export function useMyTaskState() {
  const [isInitial, setIsInitial] = useState(true)
  const [value, setValue] = useRecoilState(myTaskState)

  useEffect(() => {
    setIsInitial(false)
  }, [])

  return [isInitial ? [] : value, setValue] as const
}
