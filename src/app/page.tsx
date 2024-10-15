'use client'

import { AddMyTask } from '@/components/AddMyTask'
import { MyTaskList } from '@/components/MyTaskList'

export default function MyTasks() {
  return (
    <main>
      <AddMyTask />
      <MyTaskList />
    </main>
  )
}
