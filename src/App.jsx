import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Section_1 from './components/Section_1/Section_1'
import Section_2 from './components/Section_2/Section_2'
import Section_3 from './components/Section_3/Section_3'
import Footer from './components/Footer/Footer'

import PopupForm from './components/PopUpForm/PopUpForm'
import ThankYou from './components/ThankYouMessage/Thank_You_Message'
import ShowData from './ShowData/ShowData'

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formDataList, setFormDataList] = useState([])

  const handleOpen = () => setShowForm(true)
  const handleClose = () => setShowForm(false)

  const handleSubmit = (data) => {
    setFormDataList(prev => [...prev, data])
    setSubmitted(true)
    setShowForm(false)
    setTimeout(() => setSubmitted(false), 4000)
  }


  return (
   <>
   <Navbar onOpen={handleOpen}/>
   <Main onOpen={handleOpen}/>
   <Section_1/>
   <Section_2/>
   <Section_3 onOpen={handleOpen}/>

   {formDataList.length > 0 && <ShowData dataList={formDataList} />}
   <Footer/>

   {showForm && <PopupForm onClose={handleClose} onSubmit={handleSubmit} />}
   {submitted && <ThankYou />}
   </>
  )
}

export default App
