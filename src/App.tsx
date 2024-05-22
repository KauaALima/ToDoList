import { useState } from 'react'
import { EmptyTasks } from './components/EmptyTasks'
import { Header } from './components/Header'
import { InfoTasks } from './components/InfoTasks'
import { Tasks } from './components/Tasks'
import { CirclePlus } from 'lucide-react'

export interface Itasks {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Itasks[]>([])
  const [inputValue, setIputValue] = useState('')

  const CheckedTaskCount = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTasks() {
    if (inputValue.length === 0) {
      return alert('Este campo não pode ser vazio')
    }

    const newTask: Itasks = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setIputValue('')
  }

  function handleDeleteTask(id: number) {
    const filterTasks = tasks.filter((task) => {
      return task.id !== id
    })

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filterTasks)
  }

  function handleToogleTask({ id, value }: { id: number; value: boolean }) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updateTask)
  }

  return (
    <div className="">
      <Header />

      <main className="max-w-[736px] flex flex-col -mt-7 mx-auto space-y-16 p-4">
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setIputValue(e.target.value)}
            value={inputValue}
            className="p-4 w-full text-base text-gray-100 bg-gray-500 ring-1 ring-gray-700 rounded-lg placeholder:text-gray-300 focus:ring-1 focus:ring-purple-100"
          />
          <button
            onClick={handleAddTasks}
            className="p-4 flex gap-2 items-center justify-center bg-blue-700 rounded-lg text-sm font-bold duration-150 hover:bg-blue-100 hover:duration-150"
          >
            Criar
            <CirclePlus size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <header className="flex items-center justify-between">
            <InfoTasks text="Tarefas criadas" TasksCount={tasks.length} />
            <InfoTasks
              text="Concluídas"
              isCompleted
              TasksCount={tasks.length}
              CheckedTasksCount={CheckedTaskCount}
            />
          </header>

          {tasks.length > 0 ? (
            <section className="space-y-3">
              {tasks.map((task) => {
                return (
                  <Tasks
                    key={task.id}
                    data={task}
                    ondDeletedTask={handleDeleteTask}
                    toggleTasksStatus={handleToogleTask}
                  />
                )
              })}
            </section>
          ) : (
            <EmptyTasks />
          )}
        </div>
      </main>
    </div>
  )
}
