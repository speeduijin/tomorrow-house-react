import './Overlay.scss'

interface OverlayProps {
  isActiveSidebar: boolean
  closeSidebar: () => void
}

function Overlay({ isActiveSidebar, closeSidebar }: OverlayProps) {
  return (
    <div
      className={`Overlay${isActiveSidebar ? ' is-active' : ''}`}
      aria-hidden
      onClick={closeSidebar}
    ></div>
  )
}

export default Overlay
