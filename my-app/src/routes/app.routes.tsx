import type React from 'react'
import { Suspense } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MSpin from '../components/MSpin/MSpin.component'
import DashboardRouter from './dashboard.routes'
import MTabs from '../components/MTabs'

const AppRoutes: React.FC = () => {

  return(
    <BrowserRouter>

      <Suspense
        fallback={
          <MSpin/>
        }
      >
        <Routes>
          <Route
            path='/dashboard/*'
            element={
            <>
              <MTabs
                routes={[
                  "Main",
                  "Other"
                ]}
              />
              <DashboardRouter/>
            </>
          }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes