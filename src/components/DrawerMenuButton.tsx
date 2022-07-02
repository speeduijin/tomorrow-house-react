interface DrawerMenuButtonProps {
  buttonIClassName: string
  buttonContent: string
  id: number
  handleToggle: (id: number) => void
}

function DrawerMenuButton({
  buttonIClassName,
  buttonContent,
  id,
  handleToggle,
}: DrawerMenuButtonProps) {
  return (
    <button
      className="DrawerMenuButton"
      type="button"
      onClick={() => {
        handleToggle(id)
      }}
    >
      <i className={buttonIClassName} aria-hidden></i>
      {buttonContent}
      <i className="ic-chevron" aria-hidden></i>
    </button>
  )
}

export default DrawerMenuButton
