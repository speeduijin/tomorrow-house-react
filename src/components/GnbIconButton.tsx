import './Gnb-icon-buttons.scss'

interface GnbIconButtonProps {
  isButton: string
  className: string
  ariaLabel: string
  iClassName: string
}

const GnbIconButton = (props: GnbIconButtonProps) => {
  const isButton = props.isButton

  if (isButton === 'true') {
    return (
      <button
        className={`gnb-icon-button ${props.className}`}
        type="button"
        aria-label={props.ariaLabel}
      >
        <i className={props.iClassName}></i>
      </button>
    )
  } else if (isButton && props.iClassName === 'ic-cart') {
    return (
      <a
        className={`gnb-icon-button ${props.className}`}
        href="/"
        aria-label={props.ariaLabel}
      >
        <i className={props.iClassName}></i>
        <strong className="badge">5</strong>
      </a>
    )
  } else {
    return (
      <a
        className={`gnb-icon-button ${props.className}`}
        href="/"
        aria-label={props.ariaLabel}
      >
        <i className={props.iClassName}></i>
      </a>
    )
  }
}

export default GnbIconButton
