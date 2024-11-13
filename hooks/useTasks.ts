import {useEffect, useState} from 'react'
import {randomUUID} from 'expo-crypto'
import ITask from '../models/ITask'

type useTaskReturnValue = {
  tasks: ITask[]
  createTask: (name: string) => void
  toggleTaskStatus: (id: string) => void
}

const useTasks = (key: string = 'tasks'): useTaskReturnValue => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const isUndefined = tasks === undefined

  useEffect(() => {
    if (!tasks) {
      const demoTasks: ITask[] = []
      for (let i = 1; i <= 50; i++) {
        demoTasks.push({
          name: `Task ${i}`,
          id: randomUUID(),
          completed: i % 2 === 0,
        })
      }
      setTasks(demoTasks)
    }
    // isUndefined is derived op basis van de tasks variabele, bijgevolg moet dit niet toegevoegd worden aan de
    // dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUndefined])

  const createTask = (name: string) => {
    setTasks([
      ...(tasks ?? []),
      {
        name,
        completed: false,
        id: randomUUID(),
      },
    ])
  }

  const toggleTaskStatus = (id: string) => {
    const task = tasks?.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
      setTasks(tasks)
    }
  }

  return {
    tasks: tasks ?? [],
    createTask,
    toggleTaskStatus,
  }
}

export default useTasks
