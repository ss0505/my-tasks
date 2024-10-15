import { MyTask } from '@/app/types/type'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const myTaskState = atom<MyTask[]>({
  key: 'taskState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
