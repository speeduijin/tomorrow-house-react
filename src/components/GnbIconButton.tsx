import './GnbIconButton.scss'

interface GnbIconButtonProps {
  className: string
  ariaLabel: string
  iClassName: string
  openSidebar?: () => void
}

function GnbIconButton({
  className,
  ariaLabel,
  iClassName,
  openSidebar,
}: GnbIconButtonProps) {
  if (ariaLabel.includes('버튼')) {
    return (
      <button
        className={`GnbIconButton ${className}`}
        type="button"
        aria-label={ariaLabel}
        onClick={openSidebar}
      >
        <i className={iClassName}></i>
      </button>
    )
  }
  return (
    <a className={`GnbIconButton ${className}`} href="/" aria-label={ariaLabel}>
      <i className={iClassName}></i>

      {className === 'is-cart' && <strong className="badge">5</strong>}
    </a>
  )
}

export default GnbIconButton
