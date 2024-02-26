import React from 'react'
import Content from './Components/Body/Content/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'


const App = () => {
  return (
    <main className='main-bg'>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
}

export default App