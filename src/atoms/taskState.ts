import { atom } from 'recoil'

export type Task = {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

export const taskState = atom<Task[]>({
  key: 'taskState',
  default: [
    {
      id: 1,
      title: '筋トレ',
      description: 'ベンチプレス、デッドリフト...',
      isCompleted: false,
    },
  ],
})
