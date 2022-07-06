import Logo from '../components/Logo'
import GnbNav from '../components/GnbNav'
import GnbIconButton from '../components/GnbIconButton'

interface GnbLeftProps {
  navInfo: {
    id: number
    globalNavItem: string
  }[]
  isActiveGnbNav: boolean[]
  setIsActiveGnbNav: React.Dispatch<React.SetStateAction<boolean[]>>
  setIsActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

function GnbLeft({
  navInfo,
  isActiveGnbNav,
  setIsActiveGnbNav,
  setIsActiveSidebar,
}: GnbLeftProps) {
  const openSidebar = () => {
    setIsActiveSidebar(true)
  }

  return (
    <div className="GnbLeft">
      <Logo />

      <GnbNav
        navInfo={navInfo}
        isActiveGnbNav={isActiveGnbNav}
        setIsActiveGnbNav={setIsActiveGnbNav}
      />

      <GnbIconButton
        className="is-menu sm-only"
        type="button"
        ariaLabel="메뉴 열기 버튼"
        onClick={openSidebar}
        iClassName="ic-menu"
      />
    </div>
  )
}

export default GnbLeft
