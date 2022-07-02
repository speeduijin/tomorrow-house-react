import './Gnb.scss'

interface GnbProps {
  children: JSX.Element[]
}

function Gnb({ children }: GnbProps) {
  return (
    <div className="Gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="Gnb-wrapper">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gnb
