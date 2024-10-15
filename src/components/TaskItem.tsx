'use client'

import { Task, useSSR } from '@/atoms/taskState'
import { Button } from '@/components/ui/Button'

export const TaskItem: React.FC = () => {
  const [tasks, setTasks] = useSSR()
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
    <>
      {tasks.map((item) => (
        <div
          key={item.id}
          className="border border-[#3E3B3B] border-solid w-[326px] h-[124px] mb-[26px] bg-white ml-[14px] mr-[36px]"
        >
          <div className="flex items-center mt-[9px] ml-[7px]">
            <p className="font-alNile font-normal text-[18px] leading-[24.57px] mr-[22px]">
              {item.isCompleted ? '完了' : '未完了'}
            </p>
            <p className="font-alNile font-normal text-[18px] leading-[24.57px]">
              タイトル: {item.title}
            </p>
          </div>
          <p className="font-alNile font-normal text-[18px] leading-[24.57px] mt-[8px] ml-[3px]">
            Description: {item.description}
          </p>
          <Button
            labelName="更新"
            onClick={() => updateItem(item)}
            className="bg-[#1AC822] text-white w-[62px] h-[40px] rounded-[10px] mr-[7px] ml-[181px]"
          />
          <Button
            labelName="削除"
            onClick={() => deleteItem(item)}
            className="bg-[#C4C4C4] text-white w-[62px] h-[40px] rounded-[10px]"
          />
        </div>
      ))}
    </>
  )
}
