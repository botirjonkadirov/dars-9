
import './App.css'

import Layout from './Layout/Layout'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    NavLink
     } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/help/FAQ'
import Form from './pages/help/Form'
import ContactLayout from './Layout/ContactLayout'
import PageNotFound from './pages/PageNotFound'
import ArticlesLayout from './Layout/ArticlesLayout'
import Articles from './pages/articles/Articles'
import ArticlesDetail  from './pages/articles/ArticlesDetail'
function App() {
 const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<ContactLayout/>}>
    <Route path='faq' element={<FAQ/>}/>
    <Route path='form' element={<Form/>}/>
    </Route>
    <Route path='articles' element={<ArticlesLayout/>}>
      <Route index element={<Articles/>}/>
      <Route path=':id' element={<ArticlesDetail/>}/>
    </Route>

    <Route path='*' element={<PageNotFound/>}/>

  </Route>
  )
 )
  return (
    <div className='App'>
    <RouterProvider router={routes}/>
    </div>
  )
}

export default App
