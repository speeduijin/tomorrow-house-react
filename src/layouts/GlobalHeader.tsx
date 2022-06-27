import Gnb from './Gnb'
import Lnb from './Lnb'
import './GlobalHeader.scss'

function GlobalHeader() {
  return (
    <header className="GlobalHeader">
      <Gnb />
      <Lnb />
    </header>
  )
}

export default GlobalHeader
