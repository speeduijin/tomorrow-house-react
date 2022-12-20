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
  onClick,
  iClassName,
  type,
}: GnbIconButtonProps) {
  const Button = () => {
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

  const Anchor = () => {
    const cartNumberBadge = className === 'is-cart' && (
      <strong className="badge">5</strong>
    )

    return (
      <a
        className={`GnbIconButton ${className}`}
        href="/"
        aria-label={ariaLabel}
      >
        <i className={iClassName}></i>
        {cartNumberBadge}
      </a>
    )
  }

  const GnbIconButtonType = type === 'button' ? <Button /> : <Anchor />
  return <>{GnbIconButtonType}</>
}

export default GnbIconButton
