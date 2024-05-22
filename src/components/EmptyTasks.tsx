import LogoList from '../assets/ClipboardList.svg'

export function EmptyTasks() {
  return (
    <div className="py-16 px-6 flex flex-col text-center items-center border-t border-gray-400 rounded-lg">
      <img src={LogoList} alt="ClipboardList" className="w-14 h-14 mb-4" />
      <p className="text-base font-bold text-gray-300">
        Você ainda não tem tarefas cadastradas
      </p>
      <span className="text-base font-normal text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}
