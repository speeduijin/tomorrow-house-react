import './Overlay.scss'

interface OverlayProps {
  isActiveSidebar: boolean
  closeSidebar: () => void
}

function Overlay(props: OverlayProps) {
  return (
    <div
      className={`Overlay ${props.isActiveSidebar ? 'is-active' : ''}`}
      aria-hidden
      onClick={props.closeSidebar}
    ></div>
  )
}

export default Overlay
