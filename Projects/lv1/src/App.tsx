import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import PageCta from './components/PageCta'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import React, { Suspense } from 'react';

// Lazy load Admin page
const Admin = React.lazy(() => import('./pages/Admin'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Suspense fallback={<div>Loading...</div>}><Admin /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <PageCta />
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App
