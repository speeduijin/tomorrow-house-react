import './Overlay.scss'

interface OverlayProps {
  isActiveSidebar: boolean
  isActiveSearchModal: boolean
  onClick: () => void
}

function Overlay({
  isActiveSidebar,
  isActiveSearchModal,
  onClick,
}: OverlayProps) {
  const isActive = isActiveSidebar || isActiveSearchModal ? ' is-active' : ''

  return (
    <div className={`Overlay${isActive}`} aria-hidden onClick={onClick}></div>
  )
}

export default Overlay
