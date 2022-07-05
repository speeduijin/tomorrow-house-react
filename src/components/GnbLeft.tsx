import Logo from './Logo'

interface GnbLeftProps {
  children: JSX.Element[]
}

function GnbLeft({ children }: GnbLeftProps) {
  return (
    <div className="GnbLeft">
      <Logo />

      {children}
    </div>
  )
}

export default GnbLeft
