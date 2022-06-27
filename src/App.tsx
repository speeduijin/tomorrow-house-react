import { useState } from 'react'
import GlobalHeader from './layouts/GlobalHeader'
import Sidebar from './layouts/Sidebar'
import Overlay from './layouts/Overlay'

function App() {
  const [isActiveSidebar, setIsActiveSidebar] = useState(false)

  const openSidebar = () => {
    setIsActiveSidebar(true)
  }
  const closeSidebar = () => {
    setIsActiveSidebar(false)
  }
  return (
    <div className="App">
      <GlobalHeader openSidebar={openSidebar} />
      <Sidebar isActiveSidebar={isActiveSidebar} />

      <Overlay isActiveSidebar={isActiveSidebar} closeSidebar={closeSidebar} />
    </div>
  )
}

export default App
