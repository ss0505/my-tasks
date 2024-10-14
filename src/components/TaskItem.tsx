'use client'

import { Task, taskState } from '@/atoms/taskState'
import { Button } from '@/components/ui/Button'
import { useRecoilState } from 'recoil'

export type TaskItemProps = {
  item: Task
}

export const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  const [tasks, setTasks] = useRecoilState(taskState)
  const updateItem = (item: Task) => {
    setTasks(
      tasks.map((task) =>
        task.id === item.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    )
  }
  const deleteItem = (item: Task) => {
    setTasks(tasks.filter((task) => task.id !== item.id))
  }
  return (
    <div>
      <p className="mr-[10px]">{item.isCompleted ? '完了' : '未完了'}</p>
      <div>{item.title}</div>
      <div className="mr-[10px]">{item.description}</div>
      <Button labelName="更新" onClick={() => updateItem(item)} />
      <Button labelName="削除" onClick={() => deleteItem(item)} />
    </div>
  )
}
