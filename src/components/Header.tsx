import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="h-[200px] flex  gap-2.5 justify-center items-center bg-gray-700 p-2">
      <img src={Logo} alt="Logo" />
      <strong className="text-[40px] leading-none font-bold text-blue-100">
        to<span className="text-purple-700">do</span>
      </strong>
    </header>
  )
}
