import './DrawerMenuButton.scss'

interface DrawerMenuButtonProps {
  iClassName: string
  content: string
  id: number
  handleToggle: (id: number) => void
}

function DrawerMenuButton(props: DrawerMenuButtonProps) {
  return (
    <button
      className="DrawerMenuButton"
      type="button"
      onClick={() => {
        props.handleToggle(props.id)
      }}
    >
      <i className={props.iClassName} aria-hidden></i>
      {props.content}
      <i className="ic-chevron" aria-hidden></i>
    </button>
  )
}

export default DrawerMenuButton
