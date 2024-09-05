import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

function Dashboard() {
  const { clearError } = useAuthStore();
  useEffect(() => {
    clearError();
  }, [useLocation().pathname]);
  return <div>Dashboard</div>;
}

export default Dashboard;
