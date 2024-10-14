'use client'

import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Header } from '@/components/ui/Header'
import { Task, taskState } from '@/atoms/taskState'
import { Button } from '@/components/ui/Button'

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
    <div>
      <Header labelName="My Tasks" />
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder="タイトル"
      />
      <input
        type="text"
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
        placeholder="内容"
      />
      <Button onClick={addTask} labelName="ADD" />
    </div>
  )
}
