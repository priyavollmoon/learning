import React, { useState } from 'react'
import studentStore from './StudentStore';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ProtectedRouter = observer(({element}) => {
    console.log("isAuth:",studentStore.isAuthenticate);
  return !studentStore.isAuthenticate? <Navigate to="/login" replace/>:element
});

export default ProtectedRouter;