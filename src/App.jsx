import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage,{jobLoader} from './pages/Jobpage'
import AddJobPage from './pages/AddJobPage'

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/add-job' element={<AddJobPage />} />
  <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader } />
  <Route path='*' element={<NotFound />} />

</Route>)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App