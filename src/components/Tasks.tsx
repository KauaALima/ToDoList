import { Trash2 } from 'lucide-react'
import { Itasks } from '../App'

interface TasksProps {
  data: Itasks
  ondDeletedTask: (id: number) => void
  toggleTasksStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Tasks({ data, ondDeletedTask, toggleTasksStatus }: TasksProps) {
  function toggleTask() {
    toggleTasksStatus({ id: data.id, value: !data.isChecked })
  }

  function deletedTask() {
    ondDeletedTask(data.id)
  }

  return (
    <div className="bg-gray-500 border border-gray-400 rounded-lg p-4">
      <div className="flex flex-1 gap-4 justify-between items-start ">
        <label htmlFor="checkbox" className="hidden">
          Checkbox
        </label>

        <input
          readOnly
          type="checkbox"
          id="Box"
          name="Box"
          onClick={toggleTask}
          className="peer mt-1.5 rounded-full w-4 h-4 bg-transparent ring-2 ring-blue-100 cursor-pointer duration-150 checked:ring-purple-700 checked:bg-purple-700 checked:hover:bg-purple-100 checked:hover:ring-purple-100 hover:ring-blue-700 hover:duration-200"
        />

        <p className="peer-checked:text-gray-300 peer-checked:line-through flex flex-1 break-all font-normal text-gray-100">
          {data.text}
        </p>

        <button
          onClick={deletedTask}
          className="text-gray-300 duration-150 hover:duration-150 hover:text-red-500"
        >
          <Trash2 size={24} />
        </button>
      </div>
    </div>
  )
}
