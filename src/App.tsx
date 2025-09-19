// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/Home'
import AboutPage from './pages/AboutPage/AboutPage'
import ProblemSet from './pages/Problemset/Problemset'
import Contest from './pages/Contest/Contest'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound'
import Announcement from './pages/Announcement/Announcement'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/problem' element={<ProblemSet />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/contest' element={<Contest />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
