'use client'

import { MyTask } from '@/app/types/type'
import { Button } from '@/components/ui/Button'
import { useMyTaskState } from '@/hooks/useMyTaskState'

export const MyTaskItem: React.FC = () => {
  const [myTasks, setTasks] = useMyTaskState()
  const updateTask = (item: MyTask) => {
    setTasks(
      myTasks.map((myTask) =>
        myTask.id === item.id
          ? { ...myTask, isCompleted: !myTask.isCompleted }
          : myTask,
      ),
    )
  }
  const deleteTask = (item: MyTask) => {
    setTasks(myTasks.filter((myTask) => myTask.id !== item.id))
  }

  return (
    <>
      {myTasks.map((item) => (
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
            onClick={() => updateTask(item)}
            className="bg-[#1AC822] text-white w-[62px] h-[40px] rounded-[10px] mr-[7px] ml-[181px]"
          />
          <Button
            labelName="削除"
            onClick={() => deleteTask(item)}
            className="bg-[#C4C4C4] text-white w-[62px] h-[40px] rounded-[10px]"
          />
        </div>
      ))}
    </>
  )
}
