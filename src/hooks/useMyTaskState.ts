import { myTaskState } from '@/atoms/myTaskState'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export function useMyTaskState() {
  const [isInitial, setIsInitial] = useState(true)
  const [myTask, setMyTask] = useRecoilState(myTaskState)

  useEffect(() => {
    setIsInitial(false)
  }, [])

  return [isInitial ? [] : myTask, setMyTask] as const
}
