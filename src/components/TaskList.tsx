'use client'

import { taskState } from '@/atoms/taskState'
import { TaskItem } from '@/components/TaskItem'
import { useRecoilValue } from 'recoil'

export const TaskList: React.FC = () => {
  const tasks = useRecoilValue(taskState)
  return (
    <>
      <h1>LIST</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </>
  )
}
