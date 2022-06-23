import Gnb from './Gnb'
import Lnb from './Lnb'
import './GlobalHeader.scss'

function GlobalHeader() {
  return (
    <header className="global-header">
      <Gnb />
      <Lnb />
    </header>
  )
}

export default GlobalHeader
