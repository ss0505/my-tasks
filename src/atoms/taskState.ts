import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export type Task = {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

const { persistAtom } = recoilPersist()

export const taskState = atom<Task[]>({
  key: 'taskState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
