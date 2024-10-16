'use client'

import { MyTask } from '@/app/types/type'
import { MyTaskItem } from '@/components/MyTaskItem'
import { Header } from '@/components/ui/Header'
import { useMyTaskState } from '@/hooks/useMyTaskState'
import { useCallback } from 'react'

export const MyTaskList: React.FC = () => {
  const [myTasks, setTasks] = useMyTaskState()

  const updateTask = useCallback(
    (item: MyTask) => {
      setTasks(
        myTasks.map((myTask) =>
          myTask.id === item.id
            ? { ...myTask, isCompleted: !myTask.isCompleted }
            : myTask,
        ),
      )
    },
    [myTasks, setTasks],
  )

  const deleteTask = useCallback(
    (item: MyTask) => {
      setTasks(myTasks.filter((myTask) => myTask.id !== item.id))
    },
    [myTasks, setTasks],
  )

  return (
    <div className="justify-items-center h-[360px] relative">
      <div className="absolute right-[19px] top-0 h-[285px] w-[1px] bg-[#979797]"></div>
      <Header
        labelName="LIST"
        className="font-alNile font-normal leading-[43.68px] tracking-[.20em] text-[#3DB156] text-[32px] text-center mt-[23px] mb-[21px]"
      />
      <div
        className={`${myTasks.length > 0 ? 'h-[290px] overflow-y-scroll' : ''}`}
      >
        {myTasks.map((item) => (
          <MyTaskItem
            key={item.id}
            item={item}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
}
