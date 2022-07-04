import './GnbIconButton.scss'

interface GnbIconButtonProps {
  className: string
  ariaLabel: string
  iClassName: string
  type?: 'button'
  onClick?: () => void
}

function GnbIconButton({
  className,
  ariaLabel,
  iClassName,
  type,
  onClick,
}: GnbIconButtonProps) {
  function Button() {
    return (
      <button
        className={`GnbIconButton ${className}`}
        type={type}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <i className={iClassName}></i>
      </button>
    )
  }

  function Anchor() {
    const isCount = className === 'is-cart' && (
      <strong className="badge">5</strong>
    )
    return (
      <a
        className={`GnbIconButton ${className}`}
        href="/"
        aria-label={ariaLabel}
      >
        <i className={iClassName}></i>

        {isCount}
      </a>
    )
  }

  const GnbIconButtonType = type === 'button' ? <Button /> : <Anchor />
  return <>{GnbIconButtonType}</>
}

export default GnbIconButton
