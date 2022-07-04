interface DrawerMenuButtonProps {
  buttonIClassName: string
  buttonContent: string
  id: number
  handleToggleDrawerMenu: (id: number) => void
}

function DrawerMenuButton({
  buttonIClassName,
  buttonContent,
  id,
  handleToggleDrawerMenu,
}: DrawerMenuButtonProps) {
  return (
    <button
      className="DrawerMenuButton"
      type="button"
      onClick={() => {
        handleToggleDrawerMenu(id)
      }}
    >
      <i className={buttonIClassName} aria-hidden></i>
      {buttonContent}
      <i className="ic-chevron" aria-hidden></i>
    </button>
  )
}

export default DrawerMenuButton
