import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    console.log("User found in reducer.")
    return children;
  } else {
    console.log("User not found in reducer.")
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
