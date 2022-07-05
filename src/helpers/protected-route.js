import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({
    user,
    redirectPath = '/login',
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

ProtectedRoute.propTypes = {
  user: PropTypes.object,
};

export default ProtectedRoute;