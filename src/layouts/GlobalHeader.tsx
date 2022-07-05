import './GlobalHeader.scss'

interface GlobalHeaderProps {
  children: JSX.Element[]
}

function GlobalHeader({ children }: GlobalHeaderProps) {
  return <header className="GlobalHeader">{children}</header>
}

export default GlobalHeader
