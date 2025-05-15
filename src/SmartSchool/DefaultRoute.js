import { observer } from "mobx-react-lite";
import React from "react";
import studentStore from "./StudentStore";
import { Navigate } from "react-router-dom";

const DefaultRoute = observer(({ }) => {
  return studentStore.isAuthenticate ?<Navigate to="/Dashboard"/>  :<Navigate to="/login" replace /> ;
});

export default DefaultRoute;
