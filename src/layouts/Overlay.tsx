import './Overlay.scss'

interface OverlayProps {
  isActiveSidebar: boolean
  isActiveSearchModal: boolean
  setIsActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

function Overlay({
  isActiveSidebar,
  isActiveSearchModal,
  setIsActiveSidebar,
}: OverlayProps) {
  const closeSidebar = () => {
    setIsActiveSidebar(false)
  }

  const isActive = isActiveSidebar || isActiveSearchModal ? 'is-active' : ''

  return (
    <div
      className={`Overlay ${isActive}`}
      aria-hidden
      onClick={closeSidebar}
    ></div>
  )
}

export default Overlay
