import Gnb from './Gnb'
import Lnb from './Lnb'
import './GlobalHeader.scss'

interface GlobalHeaderProps {
  openSidebar: () => void
}

function GlobalHeader(props: GlobalHeaderProps) {
  return (
    <header className="GlobalHeader">
      <Gnb openSidebar={props.openSidebar} />
      <Lnb />
    </header>
  )
}

export default GlobalHeader
