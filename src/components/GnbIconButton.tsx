import './Gnb-icon-buttons.scss'

interface GnbIconButtonProps {
  className: string
  ariaLabel: string
  iClassName: string
}

const GnbIconButton = (props: GnbIconButtonProps) => {
  if (
    props.className.includes('is-menu') ||
    props.className.includes('is-search')
  ) {
    return (
      <button
        className={`gnb-icon-button ${props.className}`}
        type="button"
        aria-label={props.ariaLabel}
      >
        <i className={props.iClassName}></i>
      </button>
    )
  } else {
    return (
      <a
        className={`gnb-icon-button ${props.className}`}
        href="/"
        aria-label={props.ariaLabel}
      >
        <i className={props.iClassName}></i>
        {props.className === 'is-cart' && <strong className="badge">5</strong>}
      </a>
      // } else {
      //   return (
      //     <a
      //       className={`gnb-icon-button ${props.className}`}
      //       href="/"
      //       aria-label={props.ariaLabel}
      //     >
      //       <i className={props.iClassName}></i>
      //     </a>
    )
  }
}

export default GnbIconButton
