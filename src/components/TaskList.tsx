'use client'

import { taskState } from '@/atoms/taskState'
import { TaskItem } from '@/components/TaskItem'
import { Header } from '@/components/ui/Header'
import { useRecoilValue } from 'recoil'

export const TaskList: React.FC = () => {
  const tasks = useRecoilValue(taskState)
  return (
    <>
      <Header labelName="LIST" />
      {tasks.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </>
  )
}
