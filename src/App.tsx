import { useState } from 'react'
import GlobalHeader from './layouts/GlobalHeader'
import Gnb from './layouts/Gnb'
import GnbLeft from './components/GnbLeft'
import GnbIconButton from './components/GnbIconButton'
import GnbRight from './components/GnbRight'

import Sidebar from './layouts/Sidebar'
import SearchModal from './layouts/SearchModal'
import Overlay from './layouts/Overlay'

function App() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false)

  const [isActiveSearchModal, setIsActiveSearchModal] = useState(false)

  const [searchHistoryitems, setSearchHistoryitems] = useState([
    '김버그',
    '버그',
    '튕김버그',
  ])

  const closeSidebar = () => {
    setIsActiveSidebar(false)
  }
  const openSidebar = () => {
    setIsActiveSidebar(true)
  }

  const openSearchModal = () => {
    setIsActiveSearchModal(true)
  }

  return (
    <div className="App">
      <GlobalHeader>
        <Gnb>
          <GnbLeft>
            <GnbIconButton
              className="is-menu sm-only"
              ariaLabel="메뉴 열기 버튼"
              iClassName="ic-menu"
              type="button"
              onClick={openSidebar}
            />
          </GnbLeft>
          <GnbRight
            openSearchModal={openSearchModal}
            searchHistoryitems={searchHistoryitems}
            setSearchHistoryitems={setSearchHistoryitems}
          />
        </Gnb>

        {/* <Lnb /> */}
      </GlobalHeader>
      <Sidebar isActiveSidebar={isActiveSidebar} />
      <SearchModal
        isActiveSearchModal={isActiveSearchModal}
        setIsActiveSearchModal={setIsActiveSearchModal}
        searchHistoryitems={searchHistoryitems}
        setSearchHistoryitems={setSearchHistoryitems}
      />

      <Overlay
        isActiveSidebar={isActiveSidebar}
        isActiveSearchModal={isActiveSearchModal}
        onClick={closeSidebar}
      />
    </div>
  )
}

export default App
