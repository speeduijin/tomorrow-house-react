import LocalNav from '../components/LocalNav'
import './Lnb.scss'

interface LnbProps {
  navInfo: {
    localNavItems: string[]
  }[]
  isActiveGnbNav: boolean[]
}

function Lnb({ navInfo, isActiveGnbNav }: LnbProps) {
  const gnbNavActive = navInfo.map((item, idx) => {
    return (
      isActiveGnbNav[idx] && (
        <LocalNav
          classNameTitle={'Lnb'}
          localNavItems={item.localNavItems}
          key={idx}
        />
      )
    )
  })

  return (
    <nav className="Lnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1 className="visually-hidden">스토어 메뉴</h1>

            {gnbNavActive}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Lnb
