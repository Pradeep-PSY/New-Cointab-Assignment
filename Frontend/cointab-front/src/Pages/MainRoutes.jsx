import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserDetail from './UserDetail'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userdetail' element={<UserDetail />} />
    </Routes>
  )
}

export default MainRoutes