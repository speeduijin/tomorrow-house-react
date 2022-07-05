import { useState } from 'react'
import GlobalHeader from './layouts/GlobalHeader'
import Gnb from './layouts/Gnb'
import Lnb from './layouts/Lnb'
import Sidebar from './layouts/Sidebar'
import SearchModal from './layouts/SearchModal'
import Overlay from './layouts/Overlay'

import GnbLeft from './components/GnbLeft'
import GnbNav from './components/GnbNav'
import GnbIconButton from './components/GnbIconButton'
import GnbRight from './components/GnbRight'

function App() {
  const navInfo = [
    {
      globalNavItem: '커뮤니티',
      globalNavIClassName: 'ic-community',
      drawerMenuClassName: 'is-community',
      localNavItems: [
        '홈',
        '사진',
        '집들이',
        '노하우',
        '전문가집들이',
        '셀프가이드',
        '질문과 답변',
        '이벤트',
      ],
    },
    {
      globalNavItem: '스토어',
      globalNavIClassName: 'ic-store',
      drawerMenuClassName: 'is-store',
      localNavItems: [
        '스토어',
        '카테고리',
        '신혼가구',
        '베스트',
        '오늘의딜',
        '연휴특가',
        '월동준비',
        '리퍼마켓',
        '기획전',
      ],
    },
    {
      globalNavIClassName: 'ic-expert',
      globalNavItem: '인테리어시공',
      drawerMenuClassName: 'is-expert',
      localNavItems: ['시공홈', '시공스토어'],
    },
  ]

  const isActiveGnbNavInit: boolean[] = Array(navInfo.length).fill(false)
  /* NOTE: '스토어' is-active 설정 */
  isActiveGnbNavInit[1] = true
  const [isActiveGnbNav, setIsActiveGnbNav] = useState(isActiveGnbNavInit)

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
            <GnbNav
              navInfo={navInfo}
              isActiveGnbNav={isActiveGnbNav}
              setIsActiveGnbNav={setIsActiveGnbNav}
            />
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

        <Lnb navInfo={navInfo} isActiveGnbNav={isActiveGnbNav} />
      </GlobalHeader>
      <Sidebar
        navInfo={navInfo}
        isActiveSidebar={isActiveSidebar}
        isActiveGnbNav={isActiveGnbNav}
      />
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
