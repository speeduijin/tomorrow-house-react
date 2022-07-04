import Logo from './Logo'
import GnbNav from './GnbNav'

interface GnbLeftProps {
  children: JSX.Element
}

function GnbLeft({ children }: GnbLeftProps) {
  return (
    <div className="GnbLeft">
      <Logo />
      <GnbNav />
      {children}
    </div>
  )
}

export default GnbLeft
