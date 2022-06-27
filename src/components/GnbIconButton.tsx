import './GnbIconButtons.scss'

interface GnbIconButtonProps {
  className: string
  ariaLabel: string
  iClassName: string
  openSidebar?: () => void
}

function GnbIconButton(props: GnbIconButtonProps) {
  if (props.ariaLabel.includes('버튼')) {
    return (
      <button
        className={`GnbIconButton ${props.className}`}
        type="button"
        aria-label={props.ariaLabel}
        onClick={props.openSidebar}
      >
        <i className={props.iClassName}></i>
      </button>
    )
  }
  return (
    <a
      className={`GnbIconButton ${props.className}`}
      href="/"
      aria-label={props.ariaLabel}
    >
      <i className={props.iClassName}></i>

      {props.className === 'is-cart' && <strong className="badge">5</strong>}
    </a>
  )
}

export default GnbIconButton
