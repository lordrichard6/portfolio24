import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { ThemeProvider } from './context/ThemeContext'

import './styles/globals.scss';
import './styles/customs.scss';
import './styles/variables.scss';

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
      <main className='w-screen overflow-hidden'>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
