import { useState } from 'react'
import GlobalHeader from './layouts/GlobalHeader'
import Gnb from './layouts/Gnb'
import GnbLeft from './components/GnbLeft'
import Logo from './components/Logo'
import GnbNav from './components/GnbNav'
import GnbIconButton from './components/GnbIconButton'
import GnbRight from './components/GnbRight'

import Sidebar from './layouts/Sidebar'
import Overlay from './layouts/Overlay'

function App() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false)

  const closeSidebar = () => {
    setIsActiveSidebar(false)
  }
  const openSidebar = () => {
    setIsActiveSidebar(true)
  }
  return (
    <div className="App">
      <GlobalHeader>
        <Gnb>
          <GnbLeft>
            <Logo />
            <GnbNav />
            <GnbIconButton
              className="is-menu sm-only"
              ariaLabel="메뉴 열기 버튼"
              iClassName="ic-menu"
              openSidebar={openSidebar}
            />
          </GnbLeft>
          <GnbRight />
        </Gnb>

        {/* <Lnb /> */}
      </GlobalHeader>
      <Sidebar isActiveSidebar={isActiveSidebar} />

      <Overlay isActiveSidebar={isActiveSidebar} closeSidebar={closeSidebar} />
    </div>
  )
}

export default App
