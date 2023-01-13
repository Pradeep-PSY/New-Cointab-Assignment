import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserDetail from './UserDetail'
import Greater from './Greater'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userdetail' element={<UserDetail />} />
        <Route path='/greater' element={<Greater />} />
    </Routes>
  )
}

export default MainRoutes