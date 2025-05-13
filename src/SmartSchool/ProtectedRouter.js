import React, { useState } from 'react'
import studentStore from './StudentStore';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ProtectedRouter = observer(({children}) => {
    console.log("isAuth:",studentStore.isAuthenticate);
  return studentStore.isAuthenticate? children:<Navigate to="/" replace/>
});

export default ProtectedRouter;