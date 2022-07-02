interface GnbLeftProps {
  children: JSX.Element[]
}

function GnbLeft({ children }: GnbLeftProps) {
  return <div className="GnbLeft">{children}</div>
}

export default GnbLeft
