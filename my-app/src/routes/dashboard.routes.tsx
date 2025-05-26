import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import MCard from "../components/MCard";

const DashboardRouter: React.FC = () => {
  return(
    <Routes
    >

      <Route
        index
        element={
          <Navigate to={'/dashboard/main'}/>
        }
      />

      <Route
        path="/main"
        index
        element={
          <DashboardPage/>
        }
      />

      <Route
        path="/other"
        element={
          <>
            <MCard
              mainCard={true}
            >
              <h2>Under Development...</h2>
            </MCard>
          </>
        }
      />

    </Routes>
  )
}

export default DashboardRouter