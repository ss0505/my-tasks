'use client'

import { AddTask } from '@/components/AddTask'
import { TaskList } from '@/components/TaskList'

export default function MyTasks() {
  return (
    <main>
      <AddTask />
      <TaskList />
    </main>
  )
}
