import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
