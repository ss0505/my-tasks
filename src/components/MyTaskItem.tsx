'use client'

import { MyTask } from '@/app/types/type'
import { Button } from '@/components/ui/Button'

interface MyTaskItemProps {
  item: MyTask
  updateTask: (item: MyTask) => void
  deleteTask: (item: MyTask) => void
}

export const MyTaskItem: React.FC<MyTaskItemProps> = ({
  item,
  updateTask,
  deleteTask,
}) => {
  return (
    <div
      key={item.id}
      className="border border-[#3E3B3B] border-solid w-[326px] mb-[26px] bg-white mx-auto"
    >
      <div className="flex items-center mt-[9px] ml-[7px]">
        <p className="w-[54px] font-alNile font-normal text-[18px] leading-[24.57px] mr-[4px]">
          {item.isCompleted ? '完了' : '未完了'}
        </p>
        <p className="font-alNile font-normal text-[18px] leading-[24.57px]">
          タイトル:&ensp;
        </p>
        <div className="flex flex-col">
          {item.title.match(/.{1,8}/g)?.map((chunk, index) => (
            <p
              key={index}
              className="font-alNile font-normal text-[18px] leading-[24.57px]"
            >
              {chunk}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-alNile font-normal text-[18px] leading-[24.57px] mt-[8px] ml-[4px]">
          Description:&ensp;
        </p>
        <div className="flex flex-col">
          {item.description.match(/.{1,11}/g)?.map((chunk, index) => (
            <p
              key={index}
              className="font-alNile font-normal text-[18px] leading-[24.57px] mt-[8px] ml-[3px]"
            >
              {chunk}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-end mb-[15px] mr-[14px] mt-[1.25px]">
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
    </div>
  )
}
