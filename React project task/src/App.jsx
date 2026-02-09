import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'

const App = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  )
}

export default App