'use client'

import { Task, taskState } from '@/atoms/taskState'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/ui/Header'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

export const AddTask: React.FC = () => {
  const [inputTitle, setInputTitle] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const setTasks = useSetRecoilState(taskState)
  const addTask = () => {
    if (inputTitle === '' || inputDescription === '') {
      return
    }
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: getId(oldTasks),
        title: inputTitle,
        description: inputDescription,
        isCompleted: false,
      },
    ])
    setInputTitle('')
    setInputDescription('')
  }
  const getId = (Tasks: Task[]) =>
    Tasks.length > 0 ? Tasks[Tasks.length - 1].id + 1 : 1
  return (
    <div className="grid grid-cols-1 justify-items-center mb-[79px]">
      <Header
        labelName="My Tasks"
        className="font-monda font-bold text-[48px] leading-[78.19px] tracking-[.25em] mt-[15px] mb-[16px] mx-auto"
      />
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder="タイトル"
        className="border border-[#3E3B3B] border-solid mb-[26px] w-[296px] h-[41px] font-normal text-[#3E3B3B] text-[18px] leading-[24.57px] py-[6px] pl-[11px] placeholder-[#3E3B3B]"
      />
      <textarea
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
        placeholder="内容"
        className="border border-[#3E3B3B] border-solid w-[296px] h-[113px] font-normal text-[18px] leading-[24.57px] pt-[10px] pl-[11px] mb-[8px] placeholder-[#3E3B3B]"
      />
      <Button
        onClick={addTask}
        labelName="ADD"
        className="bg-[#1AC822] text-white w-[280px] h-[40px] rounded-[10px]"
      />
    </div>
  )
}
