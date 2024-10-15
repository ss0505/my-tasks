import { atom } from 'recoil'
// import { recoilPersist } from 'recoil-persist'

export type Task = {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

// const { persistAtom } = recoilPersist()

export const taskState = atom<Task[]>({
  key: 'taskState',
  default: [
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
  ],
  // effects_UNSTABLE: [persistAtom],
})
