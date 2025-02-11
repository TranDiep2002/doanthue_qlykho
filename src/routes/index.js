// All components mapping with path for internal routes

import { lazy } from 'react'

 const Calendar = lazy(() => import('../pages/protected/Calendar'))
 const Leads = lazy(() => import('../pages/protected/Leads'))
const routes = [
  {
    path: '/app', // the url
    // component: Dashboard, // view rendered
  },
  {
    path: '/app', // the url
    // component: Welcome, // view rendered
  },
  {
    path: '/calendar',
     component: Calendar,
  },
  {
    path: '/leads',
    component: Leads,
  },

]

export default routes
