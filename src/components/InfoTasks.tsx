import { twMerge } from 'tailwind-merge'

interface InfoTasksProps {
  isCompleted?: true
  text: string
  TasksCount?: number
  CheckedTasksCount?: number
}

export function InfoTasks({
  isCompleted,
  text,
  TasksCount,
  CheckedTasksCount,
}: InfoTasksProps) {
  return (
    <div>
      <strong
        className={twMerge(
          'text-sm',
          isCompleted ? 'text-purple-100' : 'text-blue-100',
        )}
      >
        {text}{' '}
        {isCompleted && (
          <span className=" py-0.5 px-2 rounded-full text-xs text-gray-200 bg-gray-400">
            {TasksCount === 0
              ? TasksCount
              : `${CheckedTasksCount} de ${TasksCount}`}
          </span>
        )}
        {!isCompleted && (
          <span className=" py-0.5 px-2 rounded-full text-xs text-gray-200 bg-gray-400">
            {TasksCount || 0}
          </span>
        )}
      </strong>
    </div>
  )
}
