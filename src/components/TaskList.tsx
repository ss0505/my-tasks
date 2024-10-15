'use client'

import { taskState } from '@/atoms/taskState'
import { TaskItem } from '@/components/TaskItem'
import { Header } from '@/components/ui/Header'
import { useRecoilValue } from 'recoil'

export const TaskList: React.FC = () => {
  const tasks = useRecoilValue(taskState)
  return (
    <div className="grid grid-cols-1 justify-items-center h-[360px] relative">
      <div className="absolute right-[19px] top-0 h-[285px] w-[1px] bg-[#979797]"></div>
      <Header
        labelName="LIST"
        className="font-alNile font-normal leading-[43.68px] tracking-[.20em] text-[#3DB156] text-[32px] text-center mt-[23px] mb-[21px]"
      />
      <div className="overflow-y-scroll">
        {tasks.map((task) => (
          <TaskItem key={task.id} item={task} />
        ))}
      </div>
    </div>
  )
}
