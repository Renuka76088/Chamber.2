import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import TradeEnquiry from './Components/TradeEnquiry'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import BlogPage from './Pages/BlogPage'
import ContactUs from './Pages/ContactUs'
import ChamberServices from './Pages/ChamberServices'
import ChamberManagement from './Pages/ChamberManagement'
import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import EQuotationForm from './Pages/EQuotationForm'
import EAuctionFullPage from './Pages/EAuctionFullPage'
import TenderContractPage from './Pages/TenderContractPage'
import CareerPage from './Pages/CareerPage'
import CircularsPage from './Pages/circulars'
import AppointmentPage from './Pages/AppointmentPage'
import NoticeBoardPage from './Pages/NoticeBoardPage'
import MediaGalleryPage from './Pages/MediaGalleryPage'
import TextileAssociatesPage from './Pages/TextileAssociatesPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>

<Route path='/' element={<Landing/>}/>
<Route path='/trade-enquiry-(e-form)' element={<TradeEnquiry/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/blog' element={< BlogPage/>}/>
<Route path='/contact' element={<  ContactUs/>}/>
<Route path='/our-chamber-service' element={<  ChamberServices/>}/>
<Route path='/our-chamber-management' element={<  ChamberManagement/>}/>
<Route path='/trade-enquiry-e-form-' element={<  TradeEnquiryForm/>}/>
<Route path='/e-quotation-e-form-' element={<  EQuotationForm/>}/>
<Route path='/e-auction-e-form-' element={<  EAuctionFullPage/>}/>
<Route path='/tender-contract' element={<  TenderContractPage/>}/>
<Route path='/career-page' element={<   CareerPage/>}/>
<Route path='/circular' element={<   CircularsPage/>}/>
<Route path='/visit-with-appointment' element={<    AppointmentPage/>}/>
<Route path='/notice-board' element={<  NoticeBoardPage/>}/>
<Route path='/media-gallery' element={<  MediaGalleryPage/>}/>
<Route path='/our-textile-associates' element={<   TextileAssociatesPage/>}/>



</Routes>
<Footer/>

</BrowserRouter>
    </>
  )
}

export default App
