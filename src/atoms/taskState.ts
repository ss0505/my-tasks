import { Task } from '@/app/types/type'
import { useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const defaultValue = [
  {
    id: 1,
    title: '筋トレ1',
    description: '胸トレ',
    isCompleted: false,
  },
  {
    id: 2,
    title: '筋トレ2',
    description: '背中トレ',
    isCompleted: true,
  },
  {
    id: 3,
    title: '筋トレ',
    description: '肩、腕トレ',
    isCompleted: false,
  },
  {
    id: 4,
    title: '筋トレ',
    description: '脚トレ',
    isCompleted: true,
  },
]

export const taskState = atom<Task[]>({
  key: 'taskState',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
})

export function useSSR() {
  const [isInitial, setIsInitial] = useState(true)
  const [value, setValue] = useRecoilState(taskState)

  useEffect(() => {
    setIsInitial(false)
  }, [])

  return [isInitial ? defaultValue : value, setValue] as const
}
